"use client";
import { Button, ButtonStyleTypes, Input, InputStyleTypes } from "@untitled/shared";
import { FC, useRef } from "react";

export const Mailing: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="tabletM: flex w-full justify-between gap-2 border-gray-100 pb-16 max-tabletS:flex-col tabletM:border-b-[1px]">
      <div className="flex flex-col gap-2 tabletM:gap-5">
        <span className="text-medium-semibold-secondary text-black-900 tabletS:text-semibold tabletM:text-medium-semibold-main">
          Join our newsletter
        </span>
        <span className="text-small-regular text-gray-600 max-tabletS:mb-6 tabletS:text-medium-regular tabletM:text-regular-main">
          We’ll send you a nice letter once per week. No spam.
        </span>
      </div>
      <Input
        ref={inputRef}
        type="email"
        wrapperClassName="max-tabletS:flex-col gap-2 max-tabletS:w-full"
        placeholder="Enter your email"
        styleType={InputStyleTypes.GRAY_ROUNDED}
        className="max-tabletS:mb-2 tabletS:px-[14px] tabletS:py-[10px]"
      >
        <Button
          styleType={ButtonStyleTypes.ROUNDED_PURPLE}
          onClick={() => alert(inputRef.current?.value)}
          className="w-fit text-medium-semibold-secondary text-white max-tabletS:w-full tabletS:px-4 tabletS:py-[10px]"
        >
          Subscribe
        </Button>
      </Input>
    </div>
  );
};
