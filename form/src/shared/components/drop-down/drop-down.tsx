'use client';
import { ArrowDownIcon } from '@form/icons';
import { idGenerator } from '@form/shared';
import { Menu } from '@headlessui/react';
import { ReactNode } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

type DropDownProps<T> = {
  titleContent: ReactNode;
  contentClassName?: string;
  titleClassName?: string;
  dropDownItem: (props: T) => ReactNode;
  dropDownItemArray: T[];
  dropDownContentHeader?: ReactNode;
};

export const DropDown = <T,>({
  titleContent,
  contentClassName,
  dropDownItem,
  dropDownItemArray,
  titleClassName,
  dropDownContentHeader,
}: DropDownProps<T>) => {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button className={'w-full h-fit flex items-end'}>
          <div
            className={twJoin(
              'flex gap-4 h-full justify-between items-end py-2 w-full overflow-hidden',
              titleClassName
            )}
          >
            {titleContent}
            <div>
              <ArrowDownIcon />
            </div>
          </div>
        </Menu.Button>

        <Menu.Items
          className={twMerge(
            'z-50 w-[200px] overflow-x-hidden max-h-[200px] h-fit overflow-y-auto absolute transition-all duration-200 border-[#E2E4E5] gap-2 border-2 rounded-md bg-white',
            contentClassName
          )}
        >
          {dropDownContentHeader}

          {dropDownItemArray.map((item) => (
            <Menu.Item key={idGenerator()}>{dropDownItem?.(item)}</Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};
