import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="floatee mb-10 flex justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <a href="https://zxyz.gay">
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
        </a>
        <p className="hidden md:block print:block">zxyz&apos;s blog</p>
      </div>
      <div className="flex gap-3 print:hidden">
        <Link href="/">
          <a className={`w-8 navbar_link`} aria-label="Go to blog's homepage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
        </Link>
        <Link href="/posts">
          <a className={`w-14 navbar_link`}>Posts</a>
        </Link>
      </div>
    </nav>
  );
};
