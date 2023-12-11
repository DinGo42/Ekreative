import { FC } from 'react';
import { Button, ButtonStyleTypes, Image } from '@untitled/shared';

export const FreeTrial: FC = () => (
  <div className="w-full flex flex-col h-fit text-center max-phoneM:gap-4 gap-5">
    <span className="text-black-900 text-medium-semibold-main mb-1">
      Start your free trial
    </span>
    <span className="text-gray-600 text-small-regular">
      Join over 4,000+ startups already growing with Untitled.
    </span>
    <div className="flex max-phoneM:flex-col gap-3 max-phoneM:mt-4 mt-3 max-phoneM:mb-12 mb-9 justify-center">
      <Button
        styleType={ButtonStyleTypes.ROUNDED_PURPLE}
        className="phoneM:w-fit pt-3 pb-3 phoneM:pl-[18px] phoneM:pr-[18px]"
      >
        Get started
      </Button>
      <Button
        styleType={ButtonStyleTypes.ROUNDED_GRAY}
        className="pt-3 pb-3 phoneM:pl-[18px] phoneM:pr-[18px] text-[#344054] justify-center phoneM:w-fit"
      >
        Learn more
      </Button>
    </div>
    <Image
      alt=""
      src={'/free-trial/bg.png'}
      style={{ objectFit: 'cover' }}
      className="min-h-[228px] h-[400px] rounded-lg border-[3px] border-purple-900"
    />
  </div>
);
