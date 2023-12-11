'use client';
import { MenuIcon } from '@untitled/icons';
import { Logo } from '../logo';
import { DropDown } from '../drop-down';
import { useState } from 'react';

export const Header = () => {
  const [isOpenMenu, seOpenMenu] = useState(false);
  const [isOpenProducts, setOpenProducts] = useState(false);
  const [isOpenResources, setOpenResources] = useState(false);
  return (
    <header className="w-full flex items-center justify-between sticky top-0 bg-white z-50 pt-4 pb-4">
      <Logo />

      <DropDown
        onClick={() => {
          seOpenMenu((prev) => !prev);
          isOpenProducts && setOpenProducts(false);
        }}
        isExpanded={isOpenMenu}
        buttonTitle=""
        buttonContent={<MenuIcon />}
        dropdownContent={
          <>
            <DropDown
              onClick={() => {
                setOpenProducts((prev) => !prev);
                isOpenResources && setOpenResources(false);
              }}
              buttonTitle="Products"
              isExpanded={isOpenProducts}
              dropdownContent={
                <>
                  <span className="p-3 border-[#D0D5DD] border-t-[1px]">
                    Pricing
                  </span>
                </>
              }
              buttonProps={{
                className: 'p-2 rounded-lg flex justify-between items-center',
              }}
              contentClassName="bg-purple-900 rounded-lg border-[1px] border-[#D0D5DD]"
              contentContainerClassName="absolute top-[100px]"
            />
            <span className="p-3 border-[#D0D5DD] border-t-[1px]">Pricing</span>
          </>
        }
        buttonProps={{
          className: 'p-2 rounded-lg',
        }}
        contentClassName="bg-white rounded-lg border-[1px] border-[#D0D5DD]"
        contentContainerClassName="absolute top-[68px]"
      />
    </header>
  );
};
