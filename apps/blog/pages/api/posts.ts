import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";
import { allowCors } from "../../lib/cors";
import { withSentry } from "@sentry/nextjs";

const apiQuery = groq`
*[_type == "post"] | order(publishedAt desc) [0...5] {
  title,
  publishedAt,
  "slug": slug.current
}`;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = await getClient().fetch(apiQuery);
  res.setHeader("Cache-Control", "s-maxage=86400 stale-while-revalidate");
  res.status(200).json(posts);
}

export default withSentry(allowCors(handler));
