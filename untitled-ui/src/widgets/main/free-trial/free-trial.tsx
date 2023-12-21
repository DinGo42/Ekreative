import { FC } from 'react';
import { Button, ButtonStyleTypes } from '@untitled/shared';
import Image from 'next/image';

export const FreeTrial: FC = () => (
  <div className="w-full flex flex-col h-fit text-center max-phoneM:gap-4 gap-5 tabletM:pt-8">
    <span className="text-black-900 text-medium-semibold-main mb-1 tabletM:hidden">
      Start your free trial
    </span>
    <span className="text-black-900 text-medium-semibold-main mb-1 max-tabletM:hidden">
      Start your 30-day free trial
    </span>
    <span className="text-gray-600 text-small-regular tabletM:text-regular-main">
      Join over 4,000+ startups already growing with Untitled.
    </span>
    <div className="flex max-phoneM:flex-col gap-3 max-phoneM:mt-4 mt-3 max-phoneM:mb-12 mb-16 justify-center flex-row-reverse">
      <Button
        styleType={ButtonStyleTypes.ROUNDED_PURPLE}
        className="phoneM:w-fit pt-3 pb-3 phoneM:pl-[18px] phoneM:pr-[18px]"
      >
        Get started
      </Button>
      <Button
        styleType={ButtonStyleTypes.ROUNDED_GRAY}
        className="pt-3 pb-3 phoneM:pl-[18px] phoneM:pr-[18px] text-gray-blue-400 justify-center phoneM:w-fit"
      >
        Learn more
      </Button>
    </div>
    <div>
      <div className="overflow-hidden tabletM:h-[400px]">
        <Image
          alt="free-trial"
          src={'/free-trial/bg.png'}
          width={1200}
          height={800}
          className="rounded-lg tabletM:border-[8px] border-[4px] border-black-900 m-auto"
        />
      </div>
      <div className="flex w-full gap-2 justify-between py-24 max-tabletM:hidden relative">
        <div className="absolute left-0 w-screen top-0 -mx-[calc((100vw-100%)/2)] bg-white-800 h-full -z-20" />

        <div className="flex flex-col gap-5">
          <span className="text-medium-semibold-main text-black-900 text-start">
            Start your free trial
          </span>
          <span className="text-regular-main text-gray-600">
            Join over 4,000+ startups already growing with Untitled.
          </span>
        </div>
        <div className="flex gap-3 h-fit justify-center flex-row-reverse">
          <Button
            styleType={ButtonStyleTypes.ROUNDED_PURPLE}
            className="phoneM:w-fit pt-3 pb-3 phoneM:pl-[18px] phoneM:pr-[18px]"
          >
            Get started
          </Button>
          <Button
            styleType={ButtonStyleTypes.ROUNDED_GRAY}
            className="pt-3 pb-3 phoneM:pl-[18px] phoneM:pr-[18px] text-gray-blue-400 justify-center phoneM:w-fit"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  </div>
);
