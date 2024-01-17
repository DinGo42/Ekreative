import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Button, ButtonStyleTypes, CategoriesValues, SortOptions } from "@untitled/shared";
import { DropDownSortFilter } from "../drop-down-sort-filter";

type BlogCategoriesProps = {
  setCategory: (newCategory: CategoriesValues) => void;
  selectedCategory: CategoriesValues;
  setDateFilter: (newFilter: SortOptions) => void;
  dateFilter: SortOptions;
  categories: CategoriesValues[];
};

export const BlogFilters: FC<BlogCategoriesProps> = ({
  selectedCategory,
  setCategory,
  dateFilter,
  setDateFilter,
  categories,
}) => {
  return (
    <div className="mb-4 flex gap-8 max-tabletM:flex-col tabletM:items-center">
      <div className="flex items-center overflow-hidden overflow-x-auto border-b-[1px] border-gray-100 text-medium-semibold-secondary text-gray-400 max-tabletS:justify-between phoneM:gap-4 tabletM:w-full">
        {categories.map((category, index) => (
          <Button
            key={index}
            onClick={() => setCategory(category)}
            styleType={ButtonStyleTypes.PURPLE_WITH_BORDER_BOTTOM}
            className={twMerge(selectedCategory !== category && "border-none border-gray-400 text-gray-400")}
          >
            {category}
          </Button>
        ))}
      </div>
      <DropDownSortFilter dateFilter={dateFilter} setDateFilter={setDateFilter} />
    </div>
  );
};
