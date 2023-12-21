import { FC } from 'react';
import { DropDown } from '../drop-down';
import { Logo } from '../logo';
import { PhoneMenu } from './phone-menu.tsx';
import { Link, LinkStyleTypes } from '../link';
import { Routes } from '@untitled/shared';
export const Header: FC = () => {
  return (
    <header className="w-screen -mx-[calc((100vw-100%)/2)] sticky top-0 z-50 pt-4 pb-4 bg-white px-4">
      <div className="flex max-tabletS:justify-between tabletS:gap-10 w-full max-w-[1280px] m-auto relative">
        <Logo />
        <div className="flex gap-8 items-center max-tabletS:hidden">
          <Link href={Routes.HOME} styleType={LinkStyleTypes.SEMIBOLD_GRAY}>
            Home
          </Link>
          <DropDown
            buttonTitle="Products"
            buttonProps={{
              className: 'p-2 flex justify-between items-center gap-2 w-full',
            }}
            titleclassName="text-medium-semibold-secondary text-gray-600"
            contentContainerClassName="absolute w-full bg-white"
            contentClassName="border-[1px] border-gray-200 rounded-lg"
          >
            <Link href={Routes.CURRENT} className="p-3 text-gray-600">
              Products1
            </Link>
            <Link href={Routes.CURRENT} className="p-3 text-gray-600">
              Products2
            </Link>
            <Link href={Routes.CURRENT} className="p-3 text-gray-600">
              Products3
            </Link>
          </DropDown>
          <DropDown
            titleclassName="text-medium-semibold-secondary text-gray-600"
            buttonTitle="Resources"
            buttonProps={{
              className: 'p-2 flex justify-between items-center gap-2 w-full',
            }}
            contentContainerClassName="absolute w-full bg-white"
            contentClassName="border-[1px] border-gray-200 rounded-lg"
          >
            <Link href={Routes.CURRENT} className="p-3 text-gray-600">
              Resources1
            </Link>
            <Link href={Routes.CURRENT} className="p-3 text-gray-600">
              Resources2
            </Link>
            <Link href={Routes.CURRENT} className="p-3 text-gray-600">
              Resources3
            </Link>
          </DropDown>
          <Link href={Routes.CURRENT} styleType={LinkStyleTypes.SEMIBOLD_GRAY}>
            Pricing
          </Link>
        </div>
        <PhoneMenu />
      </div>
    </header>
  );
};
