import ErrorPage from "next/error";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import { useNextSanityImage } from "next-sanity-image";
import { postQuery } from "../../lib/queries";
import { BlogImage } from "../../components/blog_image";
import { PortableText } from "@portabletext/react";
import { BlogYouTube } from "../../components/blog_youtube";
import { Suspense, lazy } from "react";
import { BlogCodeFallback } from "../../components/blog_code_fallback";

const BlogCode = lazy(() => import("../../components/blog_code"));

export default function Post({ data, preview }) {
  const router = useRouter();

  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data?.post?.slug },
    initialData: data?.post,
    enabled: preview && data?.post?.slug,
  });

  const mainImageProps = useNextSanityImage(
    getClient(preview),
    post?.mainImage
  ) as any;

  if (router.isFallback && (!data?.post?.slug || !post?.slug)) {
    return <ErrorPage statusCode={404} />;
  }

  const serializers = {
    types: {
      image: (props) => <BlogImage props={props} preview={preview} />,
      code: (props) => (
        <Suspense fallback={<BlogCodeFallback props={props} />}>
          <BlogCode props={props} />
        </Suspense>
      ),
      youtube: (props) => <BlogYouTube props={props} />,
    },
  };

  return (
    <>
      <Head>
        <title>{post?.title} | zxyz&apos;s blog</title>
        {post?.mainImage && (
          <meta
            key="ogImage"
            property="og:image"
            content={urlFor(post?.mainImage)
              .width(1200)
              .height(627)
              .fit("crop")
              .url()}
          />
        )}
        {post?.description && (
          <>
            <meta
              key="ogDescription"
              property="og:description"
              content={post?.description}
            />
            <meta name="description" content={post?.description} />
            <meta name="twitter:description" content={post?.description} />
          </>
        )}
        <meta property="og:type" content="article" />
      </Head>
      <article className="rounded-md bg-zinc-200 p-5 dark:bg-transparent flex flex-col items-center">
        <div className="grid grid-rows-[auto,_auto,_auto] gap-y-3">
          <h1 className="text-2xl font-bold lg:text-3xl">{post?.title}</h1>
          {post?.mainImage && (
            <figure>
              <Image
                {...mainImageProps}
                layout="responsive"
                sizes="(max-width: 800px) 100vw, 800px"
                className="rounded-sm"
                alt={post?.mainImage?.alt}
              />
            </figure>
          )}
          {post?.description && (
            <p>
              <em>{post?.description}</em>
            </p>
          )}
        </div>
        <div className="prose prose-sm mt-10 dark:prose-invert sm:prose-base lg:prose-lg xl:prose-xl">
          <PortableText value={post?.body} components={serializers} />
        </div>
      </article>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: { post },
    },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
