'use client';
import { ArrowDownIcon, MenuIcon } from '@untitled/icons';
import { Logo } from '../logo';
import { Button } from '../button';
import { DropDown } from '../drop-down';
import { useState } from 'react';

export const Header = () => {
  const [isOpenProducts, setOpenProducts] = useState(false);
  const [isOpenResources, setOpenResources] = useState(false);
  return (
    <header className="w-full flex items-center justify-between sticky top-0 bg-white z-50 pt-4 pb-4">
      <Logo />
      <DropDown
        secondOnClick={() => {
          setOpenProducts(false);
        }}
        buttonChildren={<MenuIcon />}
        buttonSettings={{
          className: 'p-2 rounded-lg',
        }}
        childrenClassName="bg-white rounded-lg border-[1px] border-[#D0D5DD]"
        className="absolute top-[68px]"
      >
        <DropDown
          controls={{ isOpen: isOpenResources, setOpen: setOpenResources }}
          secondOnClick={() => {
            setOpenProducts(false);
          }}
          buttonChildren={
            <>
              {'Products'}
              {isOpenResources ? (
                <ArrowDownIcon className="rotate-180" />
              ) : (
                <ArrowDownIcon />
              )}
            </>
          }
          buttonSettings={{
            className:
              'justify-between flex items-center p-3 border-[#D0D5DD] border-b-[1px]',
          }}
          childrenClassName="bg-white rounded-b-lg border-[1px] border-[#D0D5DD] relative"
          className="absolute top-[49px]  left-0"
        >
          <span className="p-3 border-[#D0D5DD] border-b-[1px]">1</span>
          <span className="p-3">2</span>
          <span className="p-3 border-[#D0D5DD] border-t-[1px]">3</span>
        </DropDown>

        <DropDown
          controls={{ isOpen: isOpenProducts, setOpen: setOpenProducts }}
          secondOnClick={() => {
            setOpenResources(false);
          }}
          buttonChildren={
            <>
              {'Resources'}
              {isOpenProducts ? (
                <ArrowDownIcon className="rotate-180" />
              ) : (
                <ArrowDownIcon />
              )}
            </>
          }
          buttonSettings={{
            className: 'justify-between flex items-center p-3',
          }}
          childrenClassName="bg-white rounded-b-lg border-[1px] border-[#D0D5DD] relative"
          className="absolute top-[98px] left-0"
        >
          <span className="p-3 border-[#D0D5DD] border-b-[1px]">1</span>
          <span className="p-3">2</span>
          <span className="p-3 border-[#D0D5DD] border-t-[1px]">3</span>
        </DropDown>
        <span className="p-3 border-[#D0D5DD] border-t-[1px]">Pricing</span>
      </DropDown>
    </header>
  );
};
