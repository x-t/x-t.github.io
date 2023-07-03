import type { Request, Response } from "express";
// import { prisma } from "./prisma_client";
// import { fetch } from "./import_fetch";

// https://github.com/remix-run/blues-stack/blob/main/app/routes/healthcheck.tsx

export const healthz = async (req: Request, res: Response) => {
  // const host = req.headers["X-Forwarded-Host"] ?? req.headers["host"];

  try {
    // if we can connect to the database and make a simple query
    // and make a HEAD request to ourselves, then we're good.
    // await Promise.all([
    //   prisma.posts.count(),
    //   fetch(`http://${host}`, {
    //     method: "HEAD",
    //     headers: {
    //       "I-Am-A-Robot": "true",
    //     },
    //   }).then((r) => {
    //     if (!r.ok) return Promise.reject(r);
    //   }),
    // ]);
    // we're definitely fine
    res.status(200).contentType("text/plain").send("ok");
  } catch (error: unknown) {
    console.log("healthcheck ❌", { error });
    res.status(500).contentType("text/plain").send("err");
    throw error;
  }
};
