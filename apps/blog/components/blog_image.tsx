import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../lib/sanity.server";
import Image from "next/image";
import { urlFor } from "../lib/sanity";

export const BlogImage = ({ props, preview }) => {
  const imageProps = useNextSanityImage(getClient(preview), props.node);
  return (
    <a href={urlFor(props.node).url()} target="_blank" rel="noreferrer">
      <Image
        {...imageProps}
        layout="responsive"
        sizes="(max-width: 800px) 100vw, 800px"
        alt={props.node.alt}
        className="rounded-sm"
      />
    </a>
  );
};
