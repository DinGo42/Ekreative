'use client';
import { Button, ButtonStyleTypes } from '../../../button';
import { FC, useRef } from 'react';

export const Mailing: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col gap-4">
      <span className="text-small-semibold text-black-900">
        Stay up to date
      </span>
      <div className="flex max-phoneM:flex-col gap-4 h-fit">
        <input
          ref={inputRef}
          type="email"
          placeholder="Enter your email"
          className="text-medium-regular outline-none border-[1.5px] border-[#D0D5DD] rounded-lg px-[14px] py-[10px] "
        />
        <Button
          styleType={ButtonStyleTypes.ROUNDED_PURPLE}
          className="phoneM:h-fit phoneM:w-fit"
          onClick={() => alert(inputRef.current?.value)}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};
