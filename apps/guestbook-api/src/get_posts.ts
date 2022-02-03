import type { Request, Response } from "express";
import { prisma } from "./prisma_client";

export const get_posts = async (req: Request, res: Response) => {
  const posts = await prisma.posts.findMany({
    select: {
      name: true,
      comment: true,
      created_at: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  res.json({ posts });
};
