"use client";
import { Button, ButtonStyleTypes, Input, InputStyleTypes } from "@untitled/shared";
import { FC, useRef } from "react";

export const BlogInfoMailing: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col items-start gap-2 self-center">
      <div className="max-phoneM:w-full max-phoneM:flex-col flex gap-4">
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
          className="text-medium-semibold-secondary max-tabletS:w-full h-fit w-fit rounded-lg bg-purple-800 px-4 py-3 text-center text-white"
        >
          Get started
        </Button>
      </div>
    </div>
  );
};
