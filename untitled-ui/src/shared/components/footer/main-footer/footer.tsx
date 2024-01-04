import { FC } from 'react';
import { Logo } from '../../logo';
import { twJoin } from 'tailwind-merge';
import { Categories, navigationData } from '../categories';

type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => (
  <footer className={twJoin('flex flex-col gap-12', className)}>
    {<Categories categoriesArray={navigationData} />}
    <div className="w-full flex flex-wrap items-center justify-between border-t-2 border-gray-100 gap-6 pt-8 tabletM:pt-16 tabletM:pb-12">
      <Logo />
      <span className="text-small-regular text-gray-600">
        © 2077 Untitled UI. All rights reserved.
      </span>
    </div>
  </footer>
);
