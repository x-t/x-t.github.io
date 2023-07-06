import type { Request, Response } from "express";
import { prisma } from "./prisma_client";
import { fetch } from "./import_fetch";

// https://github.com/remix-run/blues-stack/blob/main/app/routes/healthcheck.tsx

export const healthz = async (req: Request, res: Response) => {
  try {
    // if we can connect to the database and make a simple query
    // and make a HEAD request to ourselves, then we're good.
    await Promise.all([
      prisma.posts.count(),
    ]);
    res.status(200).contentType("text/plain").send("ok");
  } catch (error: unknown) {
    console.log("healthcheck ❌", { error });
    res.status(500).contentType("text/plain").send("err");
    throw error;
  }
};
