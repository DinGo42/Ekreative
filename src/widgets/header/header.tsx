import { FC } from 'react';
import { ComponentWrapper, NavigationLinks } from '@pr2/shared';
import { LogoIcon } from '../../../public';

export const Header: FC = () => (
  <ComponentWrapper className="justify-between bg-blue-900 pt-3 pb-3 sticky top-0 z-50 text-white-1000">
    <header className="flex w-full justify-between items-center">
      <LogoIcon />
      <div className="flex text-bs-2 gap-8 items-center">
        <NavigationLinks contactUsButton={true} />
      </div>
    </header>
  </ComponentWrapper>
);
