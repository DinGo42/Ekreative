'use client';
import { Button, ButtonStyleTypes } from '@untitled/shared';
import { FC, useRef } from 'react';

export const BlogInfoMailing: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col gap-2 self-center items-start">
      <div className="flex gap-4 max-phoneM:flex-col max-phoneM:w-full">
        <div className="flex flex-col">
          <input
            ref={inputRef}
            type="email"
            placeholder="Enter your email"
            className="text-medium-regular outline-none border-[1.5px] border-gray-200 rounded-lg p-3 px-[12px] py-[10px]"
          />
          <span className="text-small-regular text-gray-600">
            We care about your data in our privacy policy.
          </span>
        </div>
        <Button
          styleType={ButtonStyleTypes.ROUNDED_PURPLE}
          onClick={() => console.log(inputRef.current?.value)}
          className="text-medium-semibold-secondary max-tabletS:w-full w-fit h-fit text-center bg-purple-800 px-4 py-3 rounded-lg text-white"
        >
          Get started
        </Button>
      </div>
    </div>
  );
};
