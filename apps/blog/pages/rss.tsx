import Head from "next/head";
import Link from "next/link";
import { RssIcon } from "@heroicons/react/outline";

export default function BlogFeeds() {
  const seo = {
    title: "feeds | zxyz's blog",
    description: "add my blog to your favorite reader",
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
      <article className="rounded-md bg-zinc-200 p-5 dark:bg-transparent flex flex-col items-center">
        <div className="grid grid-rows-[auto,_auto,_auto] gap-y-3">
          <h1 className="flex flex-row items-center gap-3 text-2xl font-bold lg:text-3xl">
            <RssIcon className="h-8 w-8" /> RSS and other feeds
          </h1>
        </div>
        <div className="prose prose-sm dark:prose-invert sm:prose-base lg:prose-lg xl:prose-xl">
          <p>For Feedly users, press this big, very green button:</p>
          <div>
            <a href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fblog.zxyz.gay%2Ffeed">
              {/* eslint-disable @next/next/no-img-element */}
              <picture className="align-bottom">
                <source srcSet="/images/feedly.webp" type="image/webp" />
                <img
                  id="feedlyFollow"
                  src="/images/feedly.png"
                  alt="follow me in feedly"
                  width="131"
                  height="56"
                />
              </picture>
              {/* eslint-enable @next/next/no-img-element */}
            </a>
          </div>
          <p>For other readers, use any of these feeds:</p>
          <div className="grid grid-cols-2">
            <span>RSS</span>
            <Link href="/feed">
              <a target="_blank" rel="noreferrer">
                /feed
              </a>
            </Link>
            <span>Atom</span>
            <Link href="/feed/atom">
              <a target="_blank" rel="noreferrer">
                /feed/atom
              </a>
            </Link>
            <span>JSON</span>
            <Link href="/feed/json">
              <a target="_blank" rel="noreferrer">
                /feed/json
              </a>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
