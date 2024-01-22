import { FC } from "react";
import { Button, ButtonStyleTypes } from "@untitled/shared";
import Image from "next/image";

export const FreeTrial: FC = () => (
  <div className="max-phoneM:gap-4 tabletM:pt-8 flex h-fit w-full flex-col gap-5 text-center">
    <span className="text-medium-semibold-main text-black-900 tabletM:hidden mb-1">Start your free trial</span>
    <span className="text-medium-semibold-main text-black-900 max-tabletM:hidden mb-1">
      Start your 30-day free trial
    </span>
    <span className="text-small-regular tabletM:text-regular-main text-gray-600">
      Join over 4,000+ startups already growing with Untitled.
    </span>
    <div className="max-phoneM:mb-12 max-phoneM:mt-4 max-phoneM:flex-col mb-16 mt-3 flex flex-row-reverse justify-center gap-3">
      <Button
        styleType={ButtonStyleTypes.ROUNDED_PURPLE}
        className="phoneM:w-fit phoneM:pl-[18px] phoneM:pr-[18px] pb-3 pt-3"
      >
        Get started
      </Button>
      <Button
        styleType={ButtonStyleTypes.ROUNDED_GRAY}
        className="text-gray-blue-400 phoneM:w-fit phoneM:pl-[18px] phoneM:pr-[18px] justify-center pb-3 pt-3"
      >
        Learn more
      </Button>
    </div>
    <div>
      <div className="tabletM:h-[400px] overflow-hidden">
        <Image
          alt="free-trial"
          src={"/free-trial/bg.png"}
          width={1200}
          height={800}
          className="border-black-900 tabletM:border-[8px] m-auto rounded-lg border-[4px]"
        />
      </div>
      <div className="max-tabletM:hidden relative flex w-full justify-between gap-2 py-24">
        <div className="bg-white-800 absolute left-0 top-0 -z-20 -mx-[calc((100vw-100%)/2)] h-full w-screen" />

        <div className="flex flex-col gap-5">
          <span className="text-medium-semibold-main text-black-900 text-start">Start your free trial</span>
          <span className="text-regular-main text-gray-600">
            Join over 4,000+ startups already growing with Untitled.
          </span>
        </div>
        <div className="flex h-fit flex-row-reverse justify-center gap-3">
          <Button
            styleType={ButtonStyleTypes.ROUNDED_PURPLE}
            className="phoneM:w-fit phoneM:pl-[18px] phoneM:pr-[18px] pb-3 pt-3"
          >
            Get started
          </Button>
          <Button
            styleType={ButtonStyleTypes.ROUNDED_GRAY}
            className="text-gray-blue-400 phoneM:w-fit phoneM:pl-[18px] phoneM:pr-[18px] justify-center pb-3 pt-3"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  </div>
);
