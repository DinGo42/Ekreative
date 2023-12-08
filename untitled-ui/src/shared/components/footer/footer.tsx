import { FC } from 'react';
import { Logo } from '../logo';
import { Categories } from './categories';

export const Footer: FC = () => (
  <footer className="flex flex-col gap-12">
    <Categories />
    <div className="w-full flex flex-wrap border-t-2 border-[#EAECF0] gap-6 pt-8">
      <Logo />
      <span className="text-small-regular text-gray-600">
        © 2077 Untitled UI. All rights reserved.
      </span>
    </div>
  </footer>
);
