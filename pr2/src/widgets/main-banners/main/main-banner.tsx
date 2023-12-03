import { MainBannerIcon } from '@pr2/icons';
import { ComponentWrapper, Link, LinkStyleTypes, Routs } from '@pr2/shared';
import { Colors } from '@pr2/tailwindConfig';
import { FC } from 'react';

export const MainBanner: FC = () => (
  <ComponentWrapper className="flex-col phoneSPlus:h-fit h-screen dectopS:flex-row dectopS:h-visible-screen max-dectopS:gap-10 bg-blue-900 text-white-1000">
    <div className="flex flex-col text-bs-1 w-full gap-6 dectopS:items-start items-center max-dectopS:text-center">
      <span className="text-2xl">
        Building stellar websites for early startups
      </span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </span>
      <div className="flex gap-10 items-center mt-6 max-phoneM:flex-col">
        <Link href={Routs.PORTFOLIO} styleType={LinkStyleTypes.MAIN_ROUNDED}>
          View our work
        </Link>
        <Link
          href={Routs.PRICING}
          styleType={LinkStyleTypes.SECONDARY}
          arrowColor={Colors['blue-50']}
        >
          View Pricing
        </Link>
      </div>
    </div>
    <div className="max-tabletS:hidden">
      <MainBannerIcon />
    </div>
  </ComponentWrapper>
);
