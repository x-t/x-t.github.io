import "../styles/global.css";
import Script from "next/script";
import { Navbar } from "../components/navbar";

function NextBlog({ Component, pageProps }) {
  return (
    <>
      <div className="min-h-full bg-gradient-to-tl from-mcraegreen to-mcraeblue dark:from-zinc-900 dark:to-mcraedarkblue dark:text-zinc-200 print:bg-white print:text-black">
        <main>
          <Navbar />
          <Component {...pageProps} />
        </main>
      </div>
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "3a60701912c64aed912541c4e386ea01"}'
      ></Script>
    </>
  );
}

export default NextBlog;
