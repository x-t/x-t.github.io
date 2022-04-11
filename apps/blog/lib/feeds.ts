import { NextApiRequest, NextApiResponse } from "next";
import { Feed, Item } from "feed";
import { renderFeedHtml } from "./feed_render";
import { parseISO } from "date-fns";
import { feedQuery } from "./queries";
import { getClient } from "./sanity.server";

const baseUrl = "https://blog.zxyz.me";

const buildFeed = (): Feed => {
  const copyright = `Copyright ${new Date().getFullYear()} - zxyz`;

  return new Feed({
    title: "zxyz's blog",
    description:
      "A lunatic who's obsessed with technology writes a blog. What's the worst that could happen?",
    id: "https://zxyz.me/",
    link: "https://blog.zxyz.me/",
    language: "en",
    image: `${baseUrl}/images/favicon@128.jpg`,
    favicon: `${baseUrl}/favicons/favicon@128.jpg`,
    copyright: copyright,
    generator: "NextJS + feed package",
    feedLinks: {
      json: `${baseUrl}/feeds/feed.json`,
      atom: `${baseUrl}/feeds/atom.xml`,
      rss2: `${baseUrl}/feeds/feed.xml`,
    },
    author: {
      name: "zxyz",
      link: "https://zxyz.me",
    },
  });
};

const makeItem = (post: any): Item => {
  const url = `${baseUrl}/posts/${post.slug}`;
  const cleanHtmlContent = renderFeedHtml(url, baseUrl, post);
  return {
    title: post?.title,
    link: url,
    id: url,
    date: parseISO(post?.publishedAt),
    description: post?.description,
    content: cleanHtmlContent,
  };
};

export const generateMainFeeds = async (): Promise<Feed> => {
  const feed = buildFeed();
  const posts = await getClient(false).fetch(feedQuery);
  posts.forEach((post) => feed.addItem(makeItem(post)));
  return feed;
};

export const apiRouteForFeed = (
  generator: Promise<() => string>,
  contentType: string
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "s-maxage=86400 stale-while-revalidate");
    res.end((await generator)());
  };
};
