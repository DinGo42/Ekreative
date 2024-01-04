'use client';
import {
  Button,
  ButtonStyleTypes,
  Input,
  InputStyleTypes,
} from '@untitled/shared';
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
      <Input
        ref={inputRef}
        type="email"
        wrapperClassName="max-tabletS:flex-col gap-2 max-tabletS:w-full"
        placeholder="Enter your email"
        styleType={InputStyleTypes.GRAY_ROUNDED}
        className="tabletS:py-[10px] tabletS:px-[14px] max-tabletS:mb-2"
      >
        <Button
          styleType={ButtonStyleTypes.ROUNDED_PURPLE}
          onClick={() => alert(inputRef.current?.value)}
          className="text-medium-semibold-secondary max-tabletS:w-full w-fit tabletS:py-[10px] tabletS:px-4 text-white"
        >
          Subscribe
        </Button>
      </Input>
    </div>
  );
};
