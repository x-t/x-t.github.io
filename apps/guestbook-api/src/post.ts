import { PostsSchema, Body } from "./types";
import { client } from "./create_client";
import { verifier } from "./captcha_verifier";
import { profanity as filter } from "@2toad/profanity";
import { Request, Response } from "express";
import { send_notification } from "./notification";
import { gql } from "@urql/core";

const get_ip = (req: Request) =>
  (req.headers["x-forwarded-for"] ?? "").toString() || req.socket.remoteAddress;

const is_rate_limited = async (ip: string) => {
  const { error: _error, data } = await client
    .query<{ posts: PostsSchema[] }>(
      gql`
        query GetLastPostTime($poster_ips: String!) {
          posts(
            limit: 1
            order_by: { created_at: desc }
            where: { poster_ips: { _eq: $poster_ips } }
          ) {
            created_at
          }
        }
      `,
      {
        poster_ips: ip,
      }
    )
    .toPromise();

  if (_error) throw _error.message;

  if (data.posts[0]) {
    const last_post_time = data.posts[0].created_at;
    const time_since_last_post =
      new Date().getTime() - new Date(last_post_time).getTime();
    if (time_since_last_post < 1000 * 60 * 30) {
      return true;
    }
  }

  return false;
};

const is_msg_clean = (name: string, comment: string): [boolean, string] => {
  const [is_clean_name, is_clean_comment] = [
    !filter.exists(name),
    !filter.exists(comment),
  ];
  if (!is_clean_name || !is_clean_comment) {
    return [
      false,
      `Profanity found in ${
        !is_clean_name ? "name: " + filter.censor(name) : ""
      }${!is_clean_name && !is_clean_comment ? " and " : ""}${
        !is_clean_comment ? "comment: " + filter.censor(comment) : ""
      }`,
    ];
  }
  return [true, ""];
};

export default async (req: Request, res: Response) => {
  let { name, comment, captcha_response } = req.body as Body;
  const ip = get_ip(req);

  if (name == null) name = "";

  if (!comment || !captcha_response) {
    res.status(400).send("Missing name, comment or captcha_response");
    return;
  }

  if (name.length > 32 || comment.length > 128) {
    res.status(400).send("Name or comment is too long");
    return;
  }

  const { success: did_pass } = await verifier(captcha_response);
  if (!did_pass) {
    res.status(400).send("Captcha failed");
    return;
  }

  const [is_clean, error_message] = is_msg_clean(name, comment);
  if (!is_clean) {
    res.status(400).send(error_message);
    return;
  }

  if (await is_rate_limited(ip)) {
    res.status(400).send("You must wait at least 30 minutes between posts");
    return;
  }

  const { error } = await client
    .mutation<{ insert_posts_one: PostsSchema }>(
      gql`
        mutation InsertPost(
          $name: String
          $comment: String
          $poster_ips: String
        ) {
          insert_posts_one(
            object: { name: $name, comment: $comment, poster_ips: $poster_ips }
          ) {
            id
          }
        }
      `,
      {
        name: name === "" ? null : name,
        comment,
        poster_ips: ip,
      }
    )
    .toPromise();

  if (error) throw error.message;

  res.status(201).send();

  send_notification(
    `New post: ${name == "" ? "Anonymous" : name} - ${comment.slice(0, 16)}${
      comment.length > 16 ? "..." : ""
    }
    IP: ${ip}
    User Agent: ${req.headers["user-agent"]}\n`
  );
};
