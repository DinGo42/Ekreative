'use client';
import { Button, ButtonStyleTypes } from '@untitled/shared';
import { FC, useRef } from 'react';

export const Mailing: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex max-tabletS:flex-col w-full gap-2 justify-between tabletM:border-b-[1px] border-gray-100 tabletM: pb-16">
      <div className="flex flex-col gap-2 tabletM:gap-5">
        <span className="text-medium-semibold-secondary tabletS:text-semibold tabletM:text-medium-semibold-main text-black-900">
          Join our newsletter
        </span>
        <span className="text-small-regular tabletS:text-medium-regular tabletM:text-regular-main text-gray-600 max-tabletS:mb-6">
          We’ll send you a nice letter once per week. No spam.
        </span>
      </div>
      <div className="flex max-tabletS:flex-col gap-2  max-tabletS:w-full h-fit">
        <input
          ref={inputRef}
          type="email"
          placeholder="Enter your email"
          className="text-medium-regular outline-none border-[1.5px] border-gray-200 rounded-lg p-3 tabletS:pt-[10px] tabletS:pb-[10px] tabletS:pl-[14px] tabletS:pr-[14px] max-tabletS:mb-2"
        />
        <Button
          styleType={ButtonStyleTypes.ROUNDED_PURPLE}
          onClick={() => console.log(inputRef.current?.value)}
          className="text-medium-semibold-secondary max-tabletS:w-full w-fit text-center bg-purple-800  p-3 tabletS:pt-[10px] tabletS:pb-[10px] tabletS:pl-4 tabletS:pr-4 rounded-lg text-white"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};
