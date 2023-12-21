'use client';

import { PaperPlaneIcon } from '@untitled/icons';
import { Button, ButtonStyleTypes } from '@untitled/shared';
import { useRef } from 'react';

export const WeeklyNewsletter = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white-800 rounded-2xl justify-between">
      <div className="p-3 border-[1px] border-gray-100 w-fit rounded-xl">
        <PaperPlaneIcon />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-main-semibold text-black-900">
          Weekly newsletter
        </span>
        <span className="text-medium-regular text-gray-600 mb-6">
          No spam. Just the latest releases and tips, interesting articles, and
          exclusive interviews in your inbox every week.
        </span>
        <div className="flex flex-col gap-2">
          <input
            ref={inputRef}
            type="email"
            placeholder="Enter your email"
            className="text-medium-regular outline-none border-[1.5px] border-gray-200 rounded-lg p-3 tabletS:pt-[10px] tabletS:pb-[10px] tabletS:pl-[14px] tabletS:pr-[14px] max-tabletS:mb-2"
          />
          <span className="text-small-regular text-gray-600 mb-2">
            Read about our privacy policy.
          </span>
          <Button
            styleType={ButtonStyleTypes.ROUNDED_PURPLE}
            onClick={() => alert(inputRef.current?.value)}
            className="text-medium-semibold-secondary max-tabletS:w-full w-full text-center bg-purple-800  p-3 tabletS:pt-[10px] tabletS:pb-[10px] tabletS:pl-4 tabletS:pr-4 rounded-lg text-white"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
