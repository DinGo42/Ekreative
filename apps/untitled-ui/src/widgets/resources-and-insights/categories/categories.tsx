"use client";
import { SearchIcon } from "@untitled/icons";
import {
  BlogCategories,
  Button,
  Categories as CategoriesValues,
  Input,
  InputStyleTypes,
  useDebounce,
} from "@untitled/shared";
import { ChangeEvent, FC, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { DropDownCategories } from "./drop-down-categories-mobile";

type CategoriesProps = {
  selectedCategory: "View all" | BlogCategories;
  setCategory: (state: "View all" | BlogCategories) => void;
  setSearchQuery: (query: string) => void;
};

export const Categories: FC<CategoriesProps> = ({ selectedCategory, setCategory, setSearchQuery }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setValue] = useState("");

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => setValue(target.value);

  useDebounce(() => {
    setSearchQuery(inputValue);
  }, 500);
  return (
    <>
      <DropDownCategories selectedCategory={selectedCategory} setCategory={setCategory} />

      <div className="flex h-fit flex-col gap-5 max-tabletS:hidden">
        <Input
          ref={inputRef}
          type="email"
          wrapperClassName="self-center flex w-full phoneM:w-[300px] items-center mb-3"
          placeholder="Search"
          onChange={handleChange}
          styleType={InputStyleTypes.GRAY_ROUNDED}
          className="w-full py-[10px] pl-12"
        >
          <SearchIcon className="absolute left-[14px]" />
        </Input>
        <span className="text-small-semibold text-purple-800">Blog categories</span>
        <div className="flex w-full flex-col gap-2">
          {Object.values(CategoriesValues).map((category, index) => (
            <Button
              onClick={() => setCategory(category)}
              key={index}
              className={twMerge(
                "w-[300px] whitespace-nowrap px-3 py-2 text-left text-medium-semibold-secondary text-gray-400",
                selectedCategory === category && "bg-white-800 text-gray-blue-400",
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
