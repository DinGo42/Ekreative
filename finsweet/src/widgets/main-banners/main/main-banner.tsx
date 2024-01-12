import { MainBannerIcon } from '@finsweet/icons';
import {
  ComponentWrapper,
  Link,
  LinkStyleTypes,
  Routs,
} from '@finsweet/shared';
import { Colors } from '@finsweet/tailwindConfig';
import { FC } from 'react';

export const MainBanner: FC = () => (
  <ComponentWrapper className="flex-col phoneSPlus:h-fit h-screen desktopS:flex-row desktopS:h-visible-screen justify-between max-desktopS:gap-10 bg-blue-900 text-white-1000">
    <div className="flex flex-col text-body-main gap-6 desktopS:items-start items-center max-desktopS:text-center desktopS:w-[40%]">
      <span className="text-h1">
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
