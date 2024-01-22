import { FC } from "react";
import { DropDown } from "../drop-down";
import { Logo } from "../logo";
import { PhoneMenu } from "./phone-menu.tsx";
import { Link, LinkStyleTypes } from "../link";
import { Routes } from "@untitled/shared";
export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 -mx-[calc((100vw-100%)/2)] w-screen bg-white px-4 pb-4 pt-4">
      <div className="max-tabletS:justify-between tabletS:gap-10 relative m-auto flex w-full max-w-[1280px]">
        <Link href={Routes.HOME} className="flex items-center">
          <Logo />
        </Link>
        <div className="max-tabletS:hidden flex items-center gap-8">
          <Link href={Routes.HOME} styleType={LinkStyleTypes.SEMIBOLD_GRAY}>
            Home
          </Link>
          <DropDown
            buttonTitle="Products"
            buttonProps={{
              className: "p-2 flex justify-between items-center gap-2 w-full",
            }}
            titleClassName="text-medium-semibold-secondary text-gray-600"
            contentContainerClassName="absolute w-full bg-white"
            contentClassName="border-[1px] border-gray-200 rounded-lg"
          >
            <Link href={Routes.RESOURCES_AND_INSIGHTS} className="hover:bg-white-800 p-3 text-gray-600">
              Resources and insights
            </Link>
            <Link href={Routes.RESOURCES_AND_INSIGHTS} className="hover:bg-white-800 p-3 text-gray-600">
              Resources and insights
            </Link>
            <Link href={Routes.RESOURCES_AND_INSIGHTS} className="hover:bg-white-800 p-3 text-gray-600">
              Resources and insights
            </Link>
          </DropDown>
          <DropDown
            titleClassName="text-medium-semibold-secondary text-gray-600"
            buttonTitle="Resources"
            buttonProps={{
              className: "p-2 flex justify-between items-center gap-2 w-full",
            }}
            contentContainerClassName="absolute w-full bg-white rounded-lg"
            contentClassName="border-[1px] border-gray-200 rounded-lg"
          >
            <Link href={Routes.BLOG} className="hover:bg-white-800 p-3 text-gray-600">
              Blog
            </Link>
            <Link href={Routes.BLOG} className="hover:bg-white-800 p-3 text-gray-600">
              Blog
            </Link>
            <Link href={Routes.BLOG} className="hover:bg-white-800 p-3 text-gray-600">
              Blog
            </Link>
          </DropDown>
          <Link href={Routes.RESOURCES_AND_INSIGHTS} styleType={LinkStyleTypes.SEMIBOLD_GRAY}>
            Pricing
          </Link>
        </div>
        <PhoneMenu />
      </div>
    </header>
  );
};
