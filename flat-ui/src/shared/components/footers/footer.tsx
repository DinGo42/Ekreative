import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => (
  <div className="text-main-secondary mt-20 flex w-full flex-wrap items-center justify-center gap-40 bg-[#0c2461] pb-10 pt-10 text-center">
    <div className="flex flex-col">
      <span>SHARE</span>
      <Link
        className="group flex items-center gap-2 text-small-main text-white"
        href={"https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Fflatuicolors.com"}
      >
        Share in LinkedIn
        <span className="-translate-x-full opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
          →
        </span>
      </Link>
    </div>
    <div className="flex flex-col">
      <span>MORE</span>
      <Link href={"mailto:nesternko_igor@ukr.net"} className="group flex items-center gap-2 text-small-main text-white">
        Contact Me
        <span className="-translate-x-full opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
          →
        </span>
      </Link>
    </div>
    <div className="flex flex-col">
      <span>ABOUT</span>
      <span className="text-small-main text-white">Flat UI Colors 2 copied by Ivan Nesterenko.</span>
    </div>
  </div>
);
