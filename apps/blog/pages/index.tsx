import Head from "next/head";
import { indexQuery } from "../lib/queries";
import { getClient } from "../lib/sanity.server";
import { PostCard } from "../components/post_card";

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
          title="RSS feed for zxyz's blog"
          href="/feed"
        />
        <link
          key="atom-feed"
          rel="alternative"
          type="application/atom+xml"
          title="Atom feed for zxyz's blog"
          href="/feed/atom"
        />
        <link
          key="json-feed"
          rel="alternative"
          type="application/feed+json"
          title="JSON feed for zxyz's blog"
          href="/feed/json"
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
      </div>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getClient(preview).fetch(indexQuery);
  const [hero, otherPosts] = [allPosts[0], allPosts.slice(1)];
  return {
    props: {
      preview,
      data: { hero, otherPosts },
    },
  };
}
