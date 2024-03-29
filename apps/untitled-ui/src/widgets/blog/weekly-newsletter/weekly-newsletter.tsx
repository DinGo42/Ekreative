"use client";

import { PaperPlaneIcon } from "@untitled/icons";
import { Button, ButtonStyleTypes, Input, InputStyleTypes } from "@untitled/shared";
import { useRef } from "react";

export const WeeklyNewsletter = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="bg-white-800 flex h-full w-full flex-col justify-between rounded-2xl p-8">
      <div className="w-fit rounded-xl border-[1px] border-gray-100 p-3">
        <PaperPlaneIcon />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-main-semibold text-black-900">Weekly newsletter</span>
        <span className="text-medium-regular mb-6 text-gray-600">
          No spam. Just the latest releases and tips, interesting articles, and exclusive interviews in your inbox every
          week.
        </span>
        <div className="flex flex-col gap-2">
          <Input
            ref={inputRef}
            type="email"
            wrapperClassName="flex-col gap-2 w-full"
            placeholder="Enter your email"
            styleType={InputStyleTypes.GRAY_ROUNDED}
            className="max-tabletS:mb-2 tabletS:px-[14px] tabletS:py-[10px]"
          >
            <span className="text-small-regular mb-2 text-gray-600">Read about our privacy policy.</span>
          </Input>
          <Button
            styleType={ButtonStyleTypes.ROUNDED_PURPLE}
            onClick={() => alert(inputRef.current?.value)}
            className="text-medium-semibold-secondary max-tabletS:w-full tabletS:pb-[10px] tabletS:pl-4 tabletS:pr-4  tabletS:pt-[10px] w-full rounded-lg bg-purple-800 p-3 text-center text-white"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
