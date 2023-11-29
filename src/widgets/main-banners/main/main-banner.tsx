'use client';
import { ComponentWrapper, Link, LinksStyleTypes } from '@pr2/shared';
import { MainBannerIcon } from '../../../../public/svgs';
import { FC } from 'react';
import { Colors } from '../../../../tailwind.config';

export const MainBanner: FC = () => (
  <ComponentWrapper className="h-visible-screen bg-blue-900 text-white-1000">
    <div className="flex flex-col text-bs-1 w-1/2 gap-6">
      <span className="text-2xl">
        Building stellar
        <br /> websites for early <br /> startups
      </span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
        eiusmod tempor incididunt.
      </span>
      <div className="flex gap-10 items-center mt-6">
        <Link href={'#'} styleType={LinksStyleTypes.MAIN_ROUNDED}>
          View our work
        </Link>
        <Link
          href={'#'}
          styleType={LinksStyleTypes.SECONDARY}
          arrowColor={Colors['blue-50']}
        >
          View Pricing
        </Link>
      </div>
    </div>
    <MainBannerIcon />
  </ComponentWrapper>
);
