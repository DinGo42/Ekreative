"use client";
import { ArrowDownIcon } from "@form/icons";
import { v4 as uuidv4 } from "uuid";
import { Menu } from "@headlessui/react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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
        <Menu.Button className={"flex h-fit w-full items-end"}>
          <div
            className={twMerge(
              "flex h-full w-full items-end justify-between gap-4 overflow-hidden py-2",
              titleClassName,
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
            "absolute z-50 h-fit max-h-[200px] w-[200px] gap-2 overflow-y-auto overflow-x-hidden rounded-md border-2 border-[#E2E4E5] bg-white transition-all duration-200",
            contentClassName,
          )}
        >
          {dropDownContentHeader}

          {dropDownItemArray.map(item => (
            <Menu.Item key={uuidv4()}>{dropDownItem?.(item)}</Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};
