import Head from "next/head";
import { getClient } from "../../lib/sanity.server";
import { indexQuery } from "../../lib/queries";
import { PostCard } from "../../components/post_card";

const Posts = ({ allPosts, preview }) => {
  const seo = {
    title: "all posts | zxyz's blog",
    description: "Nearly coherent writings.",
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
      <div className="grid gap-5">
        {allPosts.map((post) => {
          return <PostCard post={post} key={post._id} preview={preview} />;
        })}
      </div>
    </>
  );
};

export default Posts;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getClient(preview).fetch(indexQuery);
  return {
    props: { allPosts, preview },
  };
}
