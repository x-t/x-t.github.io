import { PostsSchema, IPsSchema, Body } from "./types";
import { client as supabase } from "./create_client";
import { verifier } from "./captcha_verifier";
import { profanity as filter } from "@2toad/profanity";
import { Request, Response } from "express";
import { send_notification } from "./notification";

export default async (req: Request, res: Response) => {
  const { name, comment, captcha_response } = req.body as Body;
  const ip =
    (req.headers["x-forwarded-for"] ?? "").toString() ||
    req.socket.remoteAddress;

  if (!name || !comment || !captcha_response) {
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

  const { error, data } = await supabase
    .from<PostsSchema>("Posts")
    .insert(name == "" ? [{ comment }] : [{ name, comment }])
    .limit(1)
    .single();

  if (error) throw new Error(error.message);

  const { id } = data!;

  if (ip) {
    const { error } = await supabase
      .from<IPsSchema>("PostIPs")
      .insert([{ post_id: id, ip }]);
    if (error) throw new Error(error.message);
  }

  res.status(201).send();

  send_notification(
    `New post: ${name == "" ? "Anonymous" : name} - ${comment.slice(0, 16)}${
      comment.length > 16 ? "..." : ""
    }
    IP: ${ip}
    User Agent: ${req.headers["user-agent"]}\n`
  );
};
