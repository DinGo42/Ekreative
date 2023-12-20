'use client';
import { twMerge } from 'tailwind-merge';
import { FC, useRef } from 'react';
import {
  Button,
  ButtonStyleTypes,
  DropDown,
  DropDownHandle,
  SortOptions,
} from '@untitled/shared';

type DropDownDateFilterProps = {
  setDateFilter: (newFilter: SortOptions) => void;
  dateFilter: SortOptions;
};

type DropdownContentProps = {
  onClose: (state: boolean) => void;
} & DropDownDateFilterProps;

const DropdownContent: FC<DropdownContentProps> = ({
  dateFilter,
  setDateFilter,
  onClose,
}) => (
  <>
    {Object.values(SortOptions).map((sortOption, index) => (
      <Button
        key={index}
        styleType={ButtonStyleTypes.ROUNDED_GRAY}
        onClick={() => {
          onClose(false);
          setDateFilter(sortOption);
        }}
        className={twMerge(
          'overflow-hidden text-black-900 w-full text-left flex items-center',
          dateFilter === sortOption && 'hidden'
        )}
      >
        {sortOption}
      </Button>
    ))}
  </>
);

export const DropDownSortFilter: FC<DropDownDateFilterProps> = (props) => {
  const dropDownRef = useRef<DropDownHandle | null>(null);
  return (
    <>
      <div className="self-end whitespace-nowrap relative">
        <DropDown
          ref={dropDownRef}
          buttonTitle={props.dateFilter}
          contentContainerClassName="absolute top-16 z-50"
          contentClassName="bg-white p-3 rounded-lg border-[2px] border-[#D0D5DD] gap-2"
          buttonProps={{
            className: 'justify-between gap-40 border-[1px]',
            styleType: ButtonStyleTypes.ROUNDED_GRAY,
          }}
        >
          <DropdownContent {...props} onClose={dropDownRef.current?.onClick!} />
        </DropDown>
      </div>
    </>
  );
};
