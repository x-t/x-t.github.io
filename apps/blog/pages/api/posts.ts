import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";
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
  res.setHeader("Content-Type", "application/javascript");
  // Cache in Vercel sits for 1 day, with all headers.
  // This means that CORS will work for one site for 1 day,
  // but not for any other site.
  // So, why not just use the old PHP-era trick of JSONP?
  const jsonp = `window.blog_callback(${JSON.stringify(posts)});`;
  res.status(200).send(jsonp);
}

export default withSentry(handler);
