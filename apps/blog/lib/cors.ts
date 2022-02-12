import type { NextApiRequest, NextApiResponse } from "next";

const isAllowedOrigin = (origin: string) => {
  const allowedOrigins = process.env.CORS_ORIGINS.split(",");
  return allowedOrigins.includes(origin);
};

export const allowCors =
  (fn) => async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Origin",
      isAllowedOrigin(req.headers.origin) ? req.headers.origin : ""
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
    return fn(req, res);
  };
