"use client";
import { twMerge } from "tailwind-merge";
import { FC, useRef } from "react";
import { Button, ButtonStyleTypes, DropDown, DropDownHandle, SortOptions } from "@untitled/shared";

type DropDownDateFilterProps = {
  setDateFilter: (newFilter: SortOptions) => void;
  dateFilter: SortOptions;
};

type DropdownContentProps = {
  onClose: (state: boolean) => void;
} & DropDownDateFilterProps;

const DropdownContent: FC<DropdownContentProps> = ({ dateFilter, setDateFilter, onClose }) => (
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
          "text-black-900 flex w-full items-center overflow-hidden text-left",
          dateFilter === sortOption && "hidden",
        )}
      >
        {sortOption}
      </Button>
    ))}
  </>
);

export const DropDownSortFilter: FC<DropDownDateFilterProps> = props => {
  const dropDownRef = useRef<DropDownHandle | null>(null);

  const handleClose = (state: boolean) => {
    dropDownRef.current?.onClick(state);
  };

  return (
    <>
      <div className="relative self-end whitespace-nowrap">
        <DropDown
          ref={dropDownRef}
          buttonTitle={props.dateFilter}
          contentContainerClassName="absolute top-16 z-50"
          contentClassName="bg-white p-3 rounded-lg border-[2px] border-gray-200 gap-2"
          buttonProps={{
            className: "justify-between gap-40 border-[1px]",
            styleType: ButtonStyleTypes.ROUNDED_GRAY,
          }}
        >
          <DropdownContent {...props} onClose={handleClose} />
        </DropDown>
      </div>
    </>
  );
};
