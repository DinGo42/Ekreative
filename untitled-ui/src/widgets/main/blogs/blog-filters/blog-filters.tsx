import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button, ButtonStyleTypes } from '@untitled/shared';
import { DropDownDateFilter } from '../drop-down-date-filter';
import { CategoriesValues, Filters } from '../types';

type BlogCategoriesProps = {
  setCategory: (newCategory: CategoriesValues) => void;
  selectedCategory: CategoriesValues;
  setFilter: (newFilter: Filters) => void;
  filter: Filters;
  categories: CategoriesValues[];
};

export const BlogFilters: FC<BlogCategoriesProps> = ({
  selectedCategory,
  setCategory,
  filter,
  setFilter,
  categories,
}) => {
  return (
    <div className="flex max-tabletM:flex-col gap-8 tabletM:items-center">
      <div className="phoneM:gap-4 max-tabletS:justify-between tabletM:w-full border-b-[1px] border-[#EAECF0] overflow-hidden text-medium-semibold-secondary text-gray-400 flex items-center overflow-x-auto">
        {categories.map((category, index) => (
          <Button
            key={index}
            onClick={() => setCategory(category)}
            styleType={ButtonStyleTypes.PURPLE_WITH_BORDER_BOTTOM}
            className={twMerge(
              selectedCategory !== category &&
                'border-none border-gray-400 text-gray-400'
            )}
          >
            {category}
          </Button>
        ))}
      </div>
      <DropDownDateFilter filter={filter} setFilter={setFilter} />
    </div>
  );
};
