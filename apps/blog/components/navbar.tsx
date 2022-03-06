import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between text-mcraegray">
      <div>
        <a
          href="https://zxyz.gay"
          className="group flex flex-row items-center gap-x-3"
        >
          {/* next/image doesn't work here, imports an empty 0px GIF for no reason */}
          {/* eslint-disable @next/next/no-img-element */}
          <picture>
            <source srcSet="/images/favicon@128.webp" type="image/webp" />
            <img
              src="/images/favicon@128.jpg"
              alt=""
              width={64}
              height={64}
              className="rounded-full"
              aria-label="Go to personal site"
            />
          </picture>
          {/* eslint-enable @next/next/no-img-element */}
          <p className="hidden print:block md:block">
            <span className="group-hover:text-white">zxyz</span>&apos;s blog
          </p>
        </a>
      </div>
      <div className="flex gap-3 print:hidden">
        <Link href="/">
          <a className={`w-14 hover:text-white`}>front</a>
        </Link>
        <Link href="/posts">
          <a className={`w-14 hover:text-white`}>posts</a>
        </Link>
        <Link href="/feeds/feed.xml">
          <a className={`w-14 hover:text-white`} target="_blank">
            rss
          </a>
        </Link>
      </div>
    </nav>
  );
};
