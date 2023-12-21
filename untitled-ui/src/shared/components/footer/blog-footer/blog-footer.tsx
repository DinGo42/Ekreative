import { Logo } from '../../logo';

import { Mailing } from './mailing';
import { Categories } from '../categories';
import { FC } from 'react';

export const BlogFooter: FC = () => (
  <footer className="flex flex-col tabletS:gap-16 pb-12">
    <div className="flex max-tabletS:flex-col gap-12 w-full tabletS:justify-between">
      <div className="flex flex-col gap-8">
        <Logo />
        <Categories
          categoriesArray={[
            { category: 'Overview' },
            { category: 'Features' },
            { category: 'Pricing' },
            { category: 'Careers' },
            { category: 'Help' },
            { category: 'Privacy' },
          ]}
        />
      </div>
      <Mailing />
    </div>
    <div className="flex flex-wrap tabletS:flex-row-reverse tabletS:justify-between text-medium-regular text-gray-600 gap-4 mt-4 pt-8 border-t-[1px] border-gray-100">
      <div className="flex flex-wrap text-medium-regular text-gray-600 gap-4">
        <span>Terms</span>
        <span>Privacy</span>
        <span>Cookies</span>
      </div>
      <span>© 2077 Untitled UI. All rights reserved.</span>
    </div>
  </footer>
);
