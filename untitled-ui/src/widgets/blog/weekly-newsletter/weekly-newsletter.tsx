'use client';

import { PaperPlaneIcon } from '@untitled/icons';
import {
  Button,
  ButtonStyleTypes,
  Input,
  InputStyleTypes,
} from '@untitled/shared';
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
          <Input
            ref={inputRef}
            type="email"
            wrapperClassName="flex-col gap-2 w-full"
            placeholder="Enter your email"
            styleType={InputStyleTypes.GRAY_ROUNDED}
            className="tabletS:py-[10px] tabletS:px-[14px] max-tabletS:mb-2"
          >
            <span className="text-small-regular text-gray-600 mb-2">
              Read about our privacy policy.
            </span>
          </Input>
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
