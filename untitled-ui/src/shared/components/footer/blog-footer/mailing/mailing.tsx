"use client";
import { Button, ButtonStyleTypes } from "../../../button";
import { Input, InputStyleTypes } from "../../../input";
import { FC, useRef } from "react";

export const Mailing: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col gap-4">
      <span className="text-small-semibold text-black-900">Stay up to date</span>

      <Input
        ref={inputRef}
        type="email"
        wrapperClassName="max-phoneM:flex-col gap-4"
        placeholder="Enter your email"
        styleType={InputStyleTypes.GRAY_ROUNDED}
        className="px-[14px] py-[10px] "
      >
        <Button
          styleType={ButtonStyleTypes.ROUNDED_PURPLE}
          className="phoneM:h-fit phoneM:w-fit"
          onClick={() => alert(inputRef.current?.value)}
        >
          Subscribe
        </Button>
      </Input>
    </div>
  );
};
