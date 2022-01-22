import { PostsSchema, Body } from "./types";
import { client } from "./create_client";
import { verifier } from "./captcha_verifier";
import { profanity as filter } from "@2toad/profanity";
import { Request, Response } from "express";
import { send_notification } from "./notification";
import { gql } from "@urql/core";

export default async (req: Request, res: Response) => {
  let { name, comment, captcha_response } = req.body as Body;
  const ip =
    (req.headers["x-forwarded-for"] ?? "").toString() ||
    req.socket.remoteAddress;

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

  const [is_clean_name, is_clean_comment] = [
    !filter.exists(name),
    !filter.exists(comment),
  ];
  if (!is_clean_name || !is_clean_comment) {
    res
      .status(400)
      .send(
        `Profanity found in ${
          !is_clean_name ? `name: ${filter.censor(name)}` : ""
        }${!is_clean_name && !is_clean_comment ? " and " : ""}${
          !is_clean_comment ? `comment: ${filter.censor(comment)}` : ""
        }`
      );
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

  if (error) throw new Error(error.message);

  res.status(201).send();

  send_notification(
    `New post: ${name == "" ? "Anonymous" : name} - ${comment.slice(0, 16)}${
      comment.length > 16 ? "..." : ""
    }
    IP: ${ip}
    User Agent: ${req.headers["user-agent"]}\n`
  );
};
