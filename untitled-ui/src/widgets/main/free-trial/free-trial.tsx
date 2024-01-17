import { FC } from "react";
import { Button, ButtonStyleTypes } from "@untitled/shared";
import Image from "next/image";

export const FreeTrial: FC = () => (
  <div className="flex h-fit w-full flex-col gap-5 text-center max-phoneM:gap-4 tabletM:pt-8">
    <span className="mb-1 text-medium-semibold-main text-black-900 tabletM:hidden">Start your free trial</span>
    <span className="mb-1 text-medium-semibold-main text-black-900 max-tabletM:hidden">
      Start your 30-day free trial
    </span>
    <span className="text-small-regular text-gray-600 tabletM:text-regular-main">
      Join over 4,000+ startups already growing with Untitled.
    </span>
    <div className="mb-16 mt-3 flex flex-row-reverse justify-center gap-3 max-phoneM:mb-12 max-phoneM:mt-4 max-phoneM:flex-col">
      <Button
        styleType={ButtonStyleTypes.ROUNDED_PURPLE}
        className="pb-3 pt-3 phoneM:w-fit phoneM:pl-[18px] phoneM:pr-[18px]"
      >
        Get started
      </Button>
      <Button
        styleType={ButtonStyleTypes.ROUNDED_GRAY}
        className="justify-center pb-3 pt-3 text-gray-blue-400 phoneM:w-fit phoneM:pl-[18px] phoneM:pr-[18px]"
      >
        Learn more
      </Button>
    </div>
    <div>
      <div className="overflow-hidden tabletM:h-[400px]">
        <Image
          alt="free-trial"
          src={"/free-trial/bg.png"}
          width={1200}
          height={800}
          className="m-auto rounded-lg border-[4px] border-black-900 tabletM:border-[8px]"
        />
      </div>
      <div className="relative flex w-full justify-between gap-2 py-24 max-tabletM:hidden">
        <div className="absolute left-0 top-0 -z-20 -mx-[calc((100vw-100%)/2)] h-full w-screen bg-white-800" />

        <div className="flex flex-col gap-5">
          <span className="text-start text-medium-semibold-main text-black-900">Start your free trial</span>
          <span className="text-regular-main text-gray-600">
            Join over 4,000+ startups already growing with Untitled.
          </span>
        </div>
        <div className="flex h-fit flex-row-reverse justify-center gap-3">
          <Button
            styleType={ButtonStyleTypes.ROUNDED_PURPLE}
            className="pb-3 pt-3 phoneM:w-fit phoneM:pl-[18px] phoneM:pr-[18px]"
          >
            Get started
          </Button>
          <Button
            styleType={ButtonStyleTypes.ROUNDED_GRAY}
            className="justify-center pb-3 pt-3 text-gray-blue-400 phoneM:w-fit phoneM:pl-[18px] phoneM:pr-[18px]"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  </div>
);
