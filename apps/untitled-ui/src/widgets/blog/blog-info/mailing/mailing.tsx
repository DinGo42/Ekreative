"use client";
import { Button, ButtonStyleTypes, Input, InputStyleTypes } from "@untitled/shared";
import { FC, useRef } from "react";

export const BlogInfoMailing: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col items-start gap-2 self-center">
      <div className="flex gap-4 max-phoneM:w-full max-phoneM:flex-col">
        <Input
          ref={inputRef}
          type="email"
          wrapperClassName="flex-col"
          placeholder="Enter your email"
          styleType={InputStyleTypes.GRAY_ROUNDED}
          className="px-[12px] py-[10px]"
        >
          <span className="text-small-regular text-gray-600">We care about your data in our privacy policy.</span>
        </Input>
        <Button
          styleType={ButtonStyleTypes.ROUNDED_PURPLE}
          onClick={() => alert(inputRef.current?.value)}
          className="h-fit w-fit rounded-lg bg-purple-800 px-4 py-3 text-center text-medium-semibold-secondary text-white max-tabletS:w-full"
        >
          Get started
        </Button>
      </div>
    </div>
  );
};
