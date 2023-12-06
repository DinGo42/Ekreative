import Link from 'next/link';
import { FC } from 'react';

export const Footer: FC = () => (
  <div className="w-full flex bg-[#0c2461] mt-20 items-center justify-center pb-10 pt-10 text-main-secondary gap-40 flex-wrap text-center">
    <div className="flex flex-col">
      <span>SHARE</span>
      <Link
        className="text-small-main text-white flex items-center gap-2 group"
        href={
          'https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Fflatuicolors.com'
        }
      >
        Share in LinkedIn
        <span className="group-hover:opacity-100 opacity-0 -translate-x-full group-hover:translate-x-0 transition-all">
          →
        </span>
      </Link>
    </div>
    <div className="flex flex-col">
      <span>MORE</span>
      <Link
        href={'mailto:nesternko_igor@ukr.net'}
        className="text-small-main text-white flex items-center gap-2 group"
      >
        Contact Me
        <span className="group-hover:opacity-100 opacity-0 -translate-x-full group-hover:translate-x-0 transition-all">
          →
        </span>
      </Link>
    </div>
    <div className="flex flex-col">
      <span>ABOUT</span>
      <span className="text-small-main text-white">
        Flat UI Colors 2 copied by Ivan Nesterenko.
      </span>
    </div>
  </div>
);
