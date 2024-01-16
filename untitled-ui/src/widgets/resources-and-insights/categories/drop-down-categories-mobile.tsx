'use client';
import { twMerge } from 'tailwind-merge';
import { FC, useRef } from 'react';
import {
  Button,
  ButtonStyleTypes,
  Categories,
  CategoriesValues,
  DropDown,
  DropDownHandle,
} from '@untitled/shared';

type DropDownDateFilterProps = {
  setCategory: (newCategory: CategoriesValues) => void;
  selectedCategory: CategoriesValues;
};

type DropdownContentProps = {
  onClose: (state: boolean) => void;
} & DropDownDateFilterProps;

const DropdownContent: FC<DropdownContentProps> = ({
  selectedCategory,
  setCategory,
  onClose,
}) => (
  <>
    {Object.values(Categories).map((category, index) => (
      <Button
        key={index}
        styleType={ButtonStyleTypes.ROUNDED_GRAY}
        onClick={() => {
          onClose(false);
          setCategory(category);
        }}
        className={twMerge(
          'overflow-hidden text-black-900 w-full text-left flex items-center',
          selectedCategory === category && 'hidden'
        )}
      >
        {category}
      </Button>
    ))}
  </>
);

export const DropDownCategories: FC<DropDownDateFilterProps> = (props) => {
  const dropDownRef = useRef<DropDownHandle | null>(null);
  const handleClose = () => {
    dropDownRef.current?.onClick();
  };
  return (
    <>
      <div className="self-end whitespace-nowrap relative tabletS:hidden">
        <DropDown
          ref={dropDownRef}
          buttonTitle={props.selectedCategory}
          contentContainerClassName="absolute top-16 z-50"
          contentClassName="bg-white p-3 rounded-lg border-[2px] border-gray-200 gap-2"
          buttonProps={{
            className: 'justify-between min-w-[300px] gap-20 border-[1px]',
            styleType: ButtonStyleTypes.ROUNDED_GRAY,
          }}
        >
          <DropdownContent {...props} onClose={handleClose} />
        </DropDown>
      </div>
    </>
  );
};
