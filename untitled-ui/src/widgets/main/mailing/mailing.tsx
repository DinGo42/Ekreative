'use client';
import { Button, ButtonStyleTypes } from '@untitled/shared';
import { FC, useRef, useState } from 'react';

export const Mailing: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col w-full gap-2">
      <span className="text-medium-semibold-secondary text-black-900">
        Join our newsletter
      </span>
      <span className="text-small-regular text-gray-600 mb-6">
        We’ll send you a nice letter once per week. No spam.
      </span>
      <input
        ref={inputRef}
        type="email"
        placeholder="Enter your email"
        className="outline-none border-[1.5px] border-[#D0D5DD] rounded-lg p-3 mb-2"
      />
      <Button
        styleType={ButtonStyleTypes.ROUNDED_PURPLE}
        onClick={() => console.log(inputRef.current?.value)}
        className="w-full text-center bg-purple-800 p-3 rounded-lg text-white"
      >
        Subscribe
      </Button>
    </div>
  );
};
