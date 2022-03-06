import Document, { Html, Head, Main, NextScript } from "next/document";
import { Navbar } from "../components/navbar";

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        className="bg-gradient-to-tl from-mcraegreen to-mcraeblue dark:from-zinc-900 dark:to-mcraedarkblue dark:text-zinc-200 print:bg-white print:text-black"
      >
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
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
