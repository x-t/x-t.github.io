import Head from "next/head";
import Link from "next/link";
import { frontQuery, heroQuery } from "../lib/queries";
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
      </Head>
      <div className="grid">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
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
            <a className="floatee flex items-center justify-center space-x-1 flex-row">
              <span>View all posts</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-[5.2px]"
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
  const hero = await getClient(preview).fetch(heroQuery);
  const otherPosts = await getClient(preview).fetch(frontQuery);
  return {
    props: {
      preview,
      data: { hero, otherPosts },
    },
    revalidate: 60,
  };
}
