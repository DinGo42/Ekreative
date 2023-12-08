import { FC } from 'react';
import { Button, ButtonStyleTypes, Image } from '@untitled/shared';

export const FreeTrial: FC = () => (
  <div className="w-full flex flex-col h-fit text-center gap-3">
    <span className="text-black-900 text-medium-semibold-main mb-1">
      Start your free trial
    </span>
    <span className="text-gray-600 text-small-regular">
      Join over 4,000+ startups already growing with Untitled.
    </span>
    <Button styleType={ButtonStyleTypes.ROUNDED_PURPLE} className="mt-4">
      Get started
    </Button>
    <Button
      styleType={ButtonStyleTypes.ROUNDED_GRAY}
      className="p-3 text-[#344054] justify-center"
    >
      Learn more
    </Button>
    <Image
      alt=""
      src={'/free-trial/bg.png'}
      className="min-h-[228px] rounded-lg border-[3px] border-purple-900 mt-12"
    />
  </div>
);
