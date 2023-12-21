'use client';
import { SearchIcon } from '@untitled/icons';
import {
  BlogCategories,
  Button,
  Categories as CategoriesValues,
  useDebounce,
} from '@untitled/shared';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { DropDownCategories } from './drop-down-categories-mobile';

type CategoriesProps = {
  selectedCategory: 'View all' | BlogCategories;
  setCategory: (state: 'View all' | BlogCategories) => void;
  setSearchQuery: (query: string) => void;
};

export const Categories: FC<CategoriesProps> = ({
  selectedCategory,
  setCategory,
  setSearchQuery,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setValue] = useState('');

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setValue(target.value);

  useDebounce(() => {
    setSearchQuery(inputValue);
  }, 500);
  return (
    <>
      <DropDownCategories
        selectedCategory={selectedCategory}
        setCategory={setCategory}
      />

      <div className="flex flex-col max-tabletS:hidden gap-5 h-fit">
        <div className="relative h-fit self-center flex w-full phoneM:w-[300px] items-center mb-3">
          <SearchIcon className="absolute left-[14px]" />
          <input
            ref={inputRef}
            type="email"
            placeholder="Search"
            onChange={handleChange}
            className="text-medium-regular outline-none border-[1.5px] w-full border-gray-200 rounded-lg py-[10px] pl-12"
          />
        </div>
        <span className="text-small-semibold text-purple-800">
          Blog categories
        </span>
        <div className="flex flex-col gap-2 w-full">
          {Object.values(CategoriesValues).map((category, index) => (
            <Button
              onClick={() => setCategory(category)}
              key={index}
              className={twMerge(
                'px-3 py-2 w-[300px] whitespace-nowrap text-left text-medium-semibold-secondary text-gray-400',
                selectedCategory === category &&
                  'bg-white-800 text-gray-blue-400'
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
