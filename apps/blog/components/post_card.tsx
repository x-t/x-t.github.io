import Link from "next/link";
import Image from "next/image";
import { DateTime } from "./datetime_local";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../lib/sanity.server";

export const PostCard = ({
  post,
  children,
  preview,
  className,
}: {
  post: any;
  children?: any;
  preview: boolean;
  className?: string;
}) => {
  const imageProps = useNextSanityImage(getClient(preview), post.mainImage);

  return (
    <Link href={`/posts/${post.slug}`}>
      <a
        className={`floatee grid grid-cols-1 overflow-hidden !p-0 ${
          post.mainImage && "sm:grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)]"
        } ${className}`}
      >
        {post.mainImage && (
          <div className="nextimg h-full w-full overflow-hidden">
            <Image
              {...imageProps}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className="h-full w-full object-cover"
              alt={post.mainImage.alt}
            />
          </div>
        )}
        <div className="p-5">
          {children}
          <h1 className="text-xl">{post.title}</h1>
          <DateTime date={post.publishedAt} />
          <p>{post.description}</p>
        </div>
      </a>
    </Link>
  );
};
