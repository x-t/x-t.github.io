import { withSentry } from "@sentry/nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { generateMainFeeds } from "../../../lib/feeds";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const feed = await generateMainFeeds();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/feed+json");
  res.setHeader("Cache-Control", "s-maxage=86400 stale-while-revalidate");
  res.end(feed.json1());
}

export default withSentry(handler);
