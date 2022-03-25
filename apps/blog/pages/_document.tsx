import Document, { Html, Head, Main, NextScript } from "next/document";
import { Navbar } from "../components/navbar";

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        className="min-h-full bg-gradient-to-tl from-mcraegreen to-mcraeblue dark:from-zinc-900 dark:to-mcraedarkblue dark:text-zinc-200 print:bg-white print:text-black"
      >
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="og:url" content="https://blog.zxyz.gay" />
          <link
            rel="shortcut icon"
            href="/images/favicon@64.jpg"
            type="image/jpeg"
          />
          <link
            rel="shortcut icon"
            href="/images/favicon@64.webp"
            type="image/webp"
          />
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
        <body>
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
