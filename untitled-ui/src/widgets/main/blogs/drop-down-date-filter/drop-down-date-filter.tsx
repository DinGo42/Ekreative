'use client';
import { twMerge } from 'tailwind-merge';
import { FC, useState } from 'react';
import { Button, ButtonStyleTypes, DropDown } from '@untitled/shared';
import { Filters } from '../types';

type DropDownDateFilterProps = {
  setFilter: (newFilter: Filters) => void;
  filter: Filters;
};

export const DropDownDateFilter: FC<DropDownDateFilterProps> = ({
  filter,
  setFilter,
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="self-end whitespace-nowrap relative">
        <DropDown
          buttonTitle={filter}
          isExpanded={isOpen}
          onClick={() => setOpen((prev) => !prev)}
          contentContainerClassName="absolute top-16 z-50"
          contentClassName="bg-white p-3 rounded-lg border-[2px] border-[#D0D5DD]"
          buttonProps={{
            className: 'justify-between gap-40 border-[1px]',
            styleType: ButtonStyleTypes.ROUNDED_GRAY,
          }}
          dropdownContent={
            <>
              <Button
                onClick={() => {
                  setOpen(false);
                  setFilter(Filters.LATEST_BY_DATE);
                }}
                className={twMerge(
                  'overflow-hidden text-black-900 w-full text-left flex items-center',
                  filter === Filters.LATEST_BY_DATE && 'hidden'
                )}
              >
                {Filters.LATEST_BY_DATE}
              </Button>
              <Button
                onClick={() => {
                  setOpen(false);
                  setFilter(Filters.OLDEST_BY_DATE);
                }}
                className={twMerge(
                  'overflow-hidden text-black-900 w-full text-left flex items-center',
                  filter === Filters.OLDEST_BY_DATE && 'hidden'
                )}
              >
                {Filters.OLDEST_BY_DATE}
              </Button>
            </>
          }
        />
      </div>
    </>
  );
};
