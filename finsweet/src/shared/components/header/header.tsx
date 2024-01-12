import { FC } from 'react';
import { LogoIcon } from '@finsweet/icons';
import { ComponentWrapper } from '../wrappers';
import { Link, NavigationLinks } from '../links';
import { Routs } from '@finsweet/shared';

export const Header: FC = () => (
  <ComponentWrapper className="justify-between bg-blue-900 pt-3 pb-3 tabletS:py-3 desktopM:py-3 sticky top-0 z-50 text-white-1000">
    <header className="flex w-full justify-between items-center">
      <LogoIcon />
      <div className="flex text-body-secondary gap-8 items-center max-tabletM:hidden">
        <NavigationLinks contactUsButton={true} />
      </div>
      <Link
        href={Routs.CONTACT_US}
        className="ml-4 p-3 phoneSPlus:pl-9 phoneSPlus:pr-9 pl-4 pr-4 max-phoneSPlus:hidden border-blue-200 border-2 rounded-4xl hover:bg-blue-300 tabletM:hidden"
      >
        Contact us
      </Link>
    </header>
  </ComponentWrapper>
);
