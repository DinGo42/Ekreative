import { Button, ButtonStyleTypes, Image } from '@untitled/shared';
import { FC } from 'react';

export const BlogFreeTrial: FC = () => (
  <div className="flex max-tabletM:flex-col tabletM:items-center tabletS:mt-24">
    <div className="flex flex-col gap-4 max-tabletS:text-center text-start">
      <span className="text-medium-semibold-main text-black-900">
        No long-term contracts. No catches.
      </span>
      <span className="text-regular-main text-gray-600">
        Start your 30-day free trial today.
      </span>
      <div className="flex max-tabletS:flex-col gap-3 mt-4 w-full items-center max-tabletS:justify-center">
        <Button
          styleType={ButtonStyleTypes.ROUNDED_PURPLE}
          className="phoneM:w-fit pt-3 pb-3 phoneM:px-[18px]"
        >
          Get started
        </Button>
        <Button
          styleType={ButtonStyleTypes.ROUNDED_GRAY}
          className="pt-3 pb-3 phoneM:px-[18px] text-gray-blue-400 justify-center phoneM:w-fit"
        >
          Learn more
        </Button>
      </div>
    </div>
    <div className="flex flex-col items-center gap-2 w-screen max-tabletS:-mx-[calc((100vw-100%)/2)] max-w-fit my-12 tabletS:-mt-[15%] tabletM:mt-0 overflow-hidden px-4 max-tabletS:self-center self-end">
      <div className="flex items-end gap-2 w-fit ">
        <Image
          src={'/free-trial/blog-page/photo2.jpg'}
          alt="photo2"
          className="w-[160px] h-[160px]"
        />
        <Image
          src={'/free-trial/blog-page/photo1.jpg'}
          alt="photo1"
          className="w-[160px] h-[240px]"
        />
      </div>
      <div className="flex overflow-hidden gap-2">
        <Image
          src={'/free-trial/blog-page/photo5.jpg'}
          alt="photo5"
          className="w-[192px] h-[128px]"
        />
        <Image
          src={'/free-trial/blog-page/photo3.jpg'}
          alt="photo3"
          className="w-[160px] h-[240px]"
        />
        <Image
          src={'/free-trial/blog-page/photo4.jpg'}
          alt="photo4"
          className="w-[192px] h-[128px]"
        />
      </div>
    </div>
  </div>
);
