'use client';
import { ComponentWrapper, Link, LinksStyleTypes } from '@pr2/shared';
import { MainFeaturesBannerIcon } from '../../../../public';

export const MainFeaturesBanner = () => (
  <ComponentWrapper className="h-visible-screen bg-blue-900 text-white-1000">
    <div className="flex flex-col text-bs-1 w-1/2 gap-6">
      <span className="text-2xl">
        All the features <br /> you need
      </span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <div className="flex gap-10 items-center mt-6">
        <Link
          href={'#'}
          styleType={LinksStyleTypes.MAIN_ROUNDED}
          className="text-lb-1 text-blue-1000"
        >
          View Pricing
        </Link>
      </div>
    </div>
    <MainFeaturesBannerIcon />
  </ComponentWrapper>
);
