import { MainBannerIcon } from "@finsweet/icons";
import { ComponentWrapper, Link, LinkStyleTypes, Routs } from "@finsweet/shared";
import { Colors } from "@finsweet/tailwindConfig";
import { FC } from "react";

export const MainBanner: FC = () => (
  <ComponentWrapper className="text-white-1000 max-desktopS:gap-10 phoneSPlus:h-fit desktopS:h-visibleScreen desktopS:flex-row h-screen flex-col justify-between bg-blue-900">
    <div className="text-body-main max-desktopS:text-center desktopS:w-[40%] desktopS:items-start flex flex-col items-center gap-6">
      <span className="text-h1">Building stellar websites for early startups</span>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
      <div className="max-phoneM:flex-col mt-6 flex items-center gap-10">
        <Link href={Routs.PORTFOLIO} styleType={LinkStyleTypes.MAIN_ROUNDED}>
          View our work
        </Link>
        <Link href={Routs.PRICING} styleType={LinkStyleTypes.SECONDARY} arrowColor={Colors["blue-50"]}>
          View Pricing
        </Link>
      </div>
    </div>
    <div className="max-tabletS:hidden">
      <MainBannerIcon />
    </div>
  </ComponentWrapper>
);
