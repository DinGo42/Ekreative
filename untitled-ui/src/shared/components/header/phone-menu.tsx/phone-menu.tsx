import { MenuIcon } from '@untitled/icons';
import { DropDown } from '../../drop-down';

import { FC } from 'react';
import { Link } from '../..';
import { Routes } from '@untitled/shared';
export const PhoneMenu: FC = () => {
  return (
    <DropDown
      DropDownWrapperClassName="tabletS:hidden static"
      buttonContent={<MenuIcon />}
      buttonProps={{
        className: 'p-2 rounded-lg',
      }}
      contentClassName="bg-white rounded-lg border-[1px] border-gray-200"
      contentContainerClassName="absolute top-[68px] right-0 w-fit"
    >
      <Link href={Routes.HOME} className="p-2 border-gray-200 border-b-[1px]">
        Home
      </Link>
      <DropDown
        buttonTitle="Products"
        buttonProps={{
          className:
            'p-2 flex justify-between items-center gap-10 w-full border-b-[1px] border-gray-200',
        }}
        contentClassName="border-b-[1px] border-gray-200"
      >
        <Link href={Routes.CURRENT} className="p-3">
          Products1
        </Link>
        <Link href={Routes.CURRENT} className="p-3">
          Products2
        </Link>
        <Link href={Routes.CURRENT} className="p-3">
          Products3
        </Link>
      </DropDown>
      <DropDown
        buttonTitle="Resources"
        buttonProps={{
          className: 'p-2 rounded-lg flex justify-between items-center gap-10',
        }}
        contentClassName="border-t-[1px] border-gray-200"
      >
        <Link href={Routes.CURRENT} className="p-3">
          Resources1
        </Link>
        <Link href={Routes.CURRENT} className="p-3">
          Resources2
        </Link>
        <Link href={Routes.CURRENT} className="p-3">
          Resources3
        </Link>
      </DropDown>
      <Link href={Routes.HOME} className="p-3 border-gray-200 border-t-[1px]">
        Pricing
      </Link>
    </DropDown>
  );
};
