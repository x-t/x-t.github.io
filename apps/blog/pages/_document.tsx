import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      // Styles don't work here anymore? What kind of stupid
      // decision is that? What's the bloody point of a custom
      // Html tag if it ignores your classnames? Vercel, why?
      <Html lang="en">
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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
