'use client';
import { MainFeaturesBannerIcon } from '@finsweet/icons';
import {
  ComponentWrapper,
  Link,
  LinkStyleTypes,
  Routs,
} from '@finsweet/shared';
import { FC } from 'react';

export const MainFeaturesBanner:FC = () => (
  <ComponentWrapper className="dectopS:h-visible-screen text-center max-dectopS:flex-col h-fit max-dectopS:gap-16 bg-blue-900 text-white-1000 justify-between">
    <div className="flex flex-col text-bs-1 dectopS:w-[40%] phoneM:w-2/3 w-full gap-6 max-dectopS:items-center">
      <span className="text-2xl">All the features you need</span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <div className="flex gap-10 items-center mt-6">
        <Link
          href={Routs.PRICING}
          styleType={LinkStyleTypes.MAIN_ROUNDED}
          className="text-lb-1 text-blue-1000"
        >
          View Pricing
        </Link>
      </div>
    </div>
    <MainFeaturesBannerIcon className="max-tabletS:hidden" />
  </ComponentWrapper>
);
