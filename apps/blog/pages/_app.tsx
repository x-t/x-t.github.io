import "../styles/global.css";
import Script from "next/script";

function NextBlog({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "3a60701912c64aed912541c4e386ea01"}'
      ></Script>
    </>
  );
}

export default NextBlog;
