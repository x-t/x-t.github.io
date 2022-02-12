import Document, { Html, Head, Main, NextScript } from "next/document";
import { Navbar } from "../components/navbar";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
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
        <body className="bg-slate-300 dark:bg-zinc-900 dark:text-zinc-200 print:text-black print:bg-white">
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
