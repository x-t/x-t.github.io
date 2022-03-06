import Head from "next/head";
import Link from "next/link";
import { frontQuery, heroQuery } from "../lib/queries";
import { getClient } from "../lib/sanity.server";
import { PostCard } from "../components/post_card";
import { generateMainFeeds } from "../lib/feeds";

export default function BlogIndex({ data, preview }) {
  const seo = {
    title: "zxyz's blog",
    description:
      "A lunatic who's obsessed with technology writes a blog. What's the worst that could happen?",
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="twitter:title" content={seo.title} />
        <meta name="og:title" content={seo.title} />
        <meta content="object" property="og:type" />
        <meta name="description" content={seo.description} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="og:description" content={seo.description} />
        <link
          key="rss-feed"
          rel="alternative"
          type="application/rss+xml"
          title="RSS feed for zxyz.gay"
          href="/feeds/rss.xml"
        />
        <link
          key="atom-feed"
          rel="alternative"
          type="application/atom+xml"
          title="Atom feed for zxyz.gay"
          href="/feeds/atom.xml"
        />
        <link
          key="json-feed"
          rel="alternative"
          type="application/feed+json"
          title="JSON feed for zxyz.gay"
          href="/feeds/feed.json"
        />
      </Head>
      <div className="grid">
        <div className="group relative">
          <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <PostCard post={data.hero} preview={preview}>
            <p className="font-bold">Latest post</p>
          </PostCard>
        </div>
        {data.otherPosts &&
          data.otherPosts.map((post) => (
            <PostCard
              key={post.slug}
              post={post}
              preview={preview}
              className="mt-10"
            />
          ))}
        <div className="mt-10">
          <Link href="/posts">
            <a className="floatee flex flex-row items-center justify-center space-x-1">
              <span>View all posts</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-[5.2px] h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  generateMainFeeds();
  const [hero, otherPosts] = await Promise.all([
    getClient(preview).fetch(heroQuery),
    getClient(preview).fetch(frontQuery),
  ]);
  return {
    props: {
      preview,
      data: { hero, otherPosts },
    },
  };
}
