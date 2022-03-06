import { stripHtml } from "string-strip-html";
import ReactDOMServer from "react-dom/server";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../lib/sanity";

export const renderFeedHtml = (url: string, baseUrl: string, post: any) => {
  const serializers = {
    types: {
      image: (props) => (
        /* eslint-disable @next/next/no-img-element */
        <img src={urlFor(props.value).url()} alt={props.value.alt} />
        /* eslint-enable @next/next/no-img-element */
      ),
      code: (props) => (
        <pre>
          <code>{props.value.code}</code>
        </pre>
      ),
    },
  };

  const htmlContent = ReactDOMServer.renderToStaticMarkup(
    <PortableText value={post?.body} components={serializers} />
  )
    .replace(/href="\/#/g, `href="${url}#`)
    .replace(/href="\//g, `href="${baseUrl}/`)
    .replace(/src="\//g, `src="${baseUrl}/`);

  return stripHtml(htmlContent, {
    onlyStripTags: ["script", "style"],
    stripTogetherWithTheirContents: ["script", "style"],
  }).result;
};
