"use client";
import { MainFeaturesBannerIcon } from "@finsweet/icons";
import { ComponentWrapper, Link, LinkStyleTypes, Routs } from "@finsweet/shared";
import { FC } from "react";

export const MainFeaturesBanner: FC = () => (
  <ComponentWrapper className="h-fit justify-between bg-blue-900 text-center text-white-1000 max-desktopS:flex-col max-desktopS:gap-16 desktopS:h-visible-screen ">
    <div className="flex w-full flex-col gap-6 text-body-main max-desktopS:items-center phoneM:w-2/3 desktopS:w-[40%] desktopS:text-start">
      <span className="text-h1">All the features you need</span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </span>
      <div className="mt-6 flex items-center gap-10">
        <Link href={Routs.PRICING} styleType={LinkStyleTypes.MAIN_ROUNDED} className="text-label-main text-blue-1000">
          View Pricing
        </Link>
      </div>
    </div>
    <MainFeaturesBannerIcon className="max-tabletS:hidden" />
  </ComponentWrapper>
);
