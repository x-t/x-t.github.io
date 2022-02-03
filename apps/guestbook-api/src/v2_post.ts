import type { Request, Response } from "express";
import { body, validationResult, CustomValidator } from "express-validator";
import { Profanity, ProfanityOptions } from "@2toad/profanity";
import { fetch } from "./import_fetch";
import { send_notification } from "./notification";
import { prisma } from "./prisma_client";

export const get_ip = (req: Request) =>
  (req.headers["x-forwarded-for"] ?? "").toString() || req.socket.remoteAddress;

export const is_rate_limited = async (ip: string) => {
  const post = await prisma.posts.findFirst({
    select: {
      created_at: true,
    },
    where: {
      poster_ips: ip,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  if (post) {
    const last_post_time = post.created_at;
    const time_since_last_post =
      new Date().getTime() - new Date(last_post_time).getTime();
    if (time_since_last_post < 1000 * 60 * 30) {
      return true;
    }
  }

  return false;
};

const bad_lang_validator: CustomValidator = (value: string) => {
  const options = new ProfanityOptions();
  options.wholeWord = false;
  options.grawlix = "*****";

  const filter = new Profanity(options);
  const is_clean = !filter.exists(value);
  if (!is_clean) {
    throw new Error(`found profanity: ${filter.censor(value)}`);
  }

  return true;
};

const botd_validator = async (value: string) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      requestId: value,
      secretKey: process.env.BOTD_SECRET || "",
    }),
  };
  const req = await fetch(
    "https://botd.fpapi.io/api/v1/verify",
    requestOptions
  );
  const res = await req.json();

  if (req.status !== 200) {
    throw new Error(`validation error: ${JSON.stringify(res.error)}`);
  }

  if (
    res.bot.automationTool.status === "processed" &&
    res.bot.automationTool.probability === 0 &&
    res.bot.browserSpoofing.status === "processed" &&
    res.bot.browserSpoofing.probability <= 0.3 &&
    res.bot.searchEngine.status === "processed" &&
    res.bot.searchEngine.probability === 0
  ) {
    return true;
  }

  throw new Error("your browser was detected as a bot.");
};

export const constraints = [
  body("name")
    .trim()
    .optional()
    .isLength({ max: 32 })
    .custom(bad_lang_validator),
  body("comment")
    .trim()
    .notEmpty()
    .withMessage("must not be empty")
    .isLength({ min: 1, max: 128 })
    .withMessage("must be between 1 and 128 characters")
    .custom(bad_lang_validator),
  body("botd_response")
    .exists()
    .bail()
    .withMessage("No captcha response was provided. Are you using JavaScript?")
    .notEmpty()
    .bail()
    .withMessage("No captcha response was provided. Are you using JavaScript?")
    .custom(botd_validator),
];

export const v2_post = async (req: Request, res: Response) => {
  const redirect = req.header("Referer") + "guestbook.html";
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).render("validation_errors.njk", {
      errors: errors.array(),
      title: "Guestbook - Validation Error",
      redirect,
    });
    return;
  }

  const { name, comment } = req.body as { name?: string; comment: string };
  const ip = get_ip(req);

  if (await is_rate_limited(ip)) {
    res.status(429).render("rate_limited.njk", {
      title: "Guestbook - Rate Limited",
      redirect,
    });
    return;
  }

  await prisma.posts.create({
    data: {
      name: name === "" ? null : name,
      comment,
      poster_ips: ip,
    },
  });

  res.redirect(redirect || "back");

  send_notification(
    `New post: ${name == "" ? "Anonymous" : name} - ${comment.slice(0, 16)}${
      comment.length > 16 ? "..." : ""
    }
    IP: ${ip}
    User Agent: ${req.headers["user-agent"]}\n`
  );
};
