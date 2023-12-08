import { ArrowDownIcon } from '@untitled/icons';
import { twMerge } from 'tailwind-merge';
import { Filters } from '../blogs';
import { FC, useState } from 'react';
import { Button, ButtonStyleTypes } from '@untitled/shared';

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
      <div className="relative">
        <Button
          styleType={ButtonStyleTypes.ROUNDED_GRAY}
          className="justify-between"
          onClick={() => setOpen((prev) => !prev)}
        >
          {filter}
          {isOpen ? (
            <ArrowDownIcon className="rotate-180" />
          ) : (
            <ArrowDownIcon />
          )}
        </Button>
        <div
          className={twMerge(
            'w-full grid transition-all duration-500 absolute top-16 z-50',
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          )}
        >
          <div className="w-full overflow-hidden ">
            <div
              className={twMerge(
                'flex-col text-black-900 w-full text-left flex items-center bg-white border-[1px] rounded-lg p-3'
              )}
            >
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
