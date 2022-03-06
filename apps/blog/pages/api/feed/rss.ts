import { withSentry } from "@sentry/nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { generateMainFeeds } from "../../../lib/feeds";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const feed = await generateMainFeeds();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/rss+xml");
  res.setHeader("Cache-Control", "s-maxage=86400 stale-while-revalidate");
  res.end(feed.rss2());
}

export default withSentry(handler);
