"use client";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../buttons";
import { PlusIcon } from "@finsweet/icons";

type DropDownProps = {
  question: string;
  answer: string;
  index: number;
};
export const DropDown: FC<DropDownProps> = ({ answer, index, question }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={twMerge(
        "flex w-full cursor-pointer flex-col gap-4 border-b-2 border-[#ECECF1]  pb-4 pt-8 transition-all",
        isOpen && "gap-4 pb-12",
      )}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-14">
          <span className="text-h6 text-blue-700 max-phoneM:hidden">{index < 9 ? "0" + index : index}</span>
          <span className="text-h6">{question}</span>
        </div>
        <Button
          onClick={() => {
            console.log(1);
            setOpen(prev => !prev);
          }}
          className={twMerge("h-fit p-4")}
        >
          <PlusIcon className={twMerge(isOpen ? "rotate-45" : "", "transition-transform")} />
        </Button>
      </div>
      <div
        className={twMerge(
          "grid grid-flow-row transition-all duration-700 tabletS:pl-20",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <span className={twMerge("overflow-hidden text-label-main")}>{answer}</span>
      </div>
    </div>
  );
};
