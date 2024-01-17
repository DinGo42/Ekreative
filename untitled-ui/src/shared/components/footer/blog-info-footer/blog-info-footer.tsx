import { FC } from "react";
import { Logo } from "../../logo";
import { twJoin } from "tailwind-merge";
import { Resources } from "./resources";
import { Categories, navigationData } from "../categories";

export const BlogInfoFooter: FC = () => (
  <footer
    className={twJoin("-mx-[calc((100vw-100%)/2)] flex w-screen flex-col items-center bg-purple-900 px-4 py-12 ")}
  >
    <div className="flex w-full max-w-[1280px] gap-6 max-desktopS:flex-col ">
      <div className="flex flex-col gap-6 desktopS:w-1/2">
        <Logo textClassName="text-white" />
        <span className="mb-6 text-medium-regular text-purple-150">
          Design amazing digital experiences that create more happy in the world.
        </span>
      </div>
      {
        <Categories
          className="desktopS:grid-cols-5"
          tagClassName="text-white border-[#ffffff4d] bg-[#ffffff1a]"
          categoryClassName="text-purple-200"
          subCategoryClassName="text-purple-150"
          categoriesArray={navigationData.filter(({ category }) => category !== "Use Cases")}
        />
      }
    </div>
    <div className="-mx-[calc((100vw-100%)/2)] mt-12 flex  w-screen justify-center border-t-2 border-[#7F56D9] px-4 pt-12">
      <div className="flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-6">
        <Resources />
        <span className="text-small-regular text-purple-150">© 2077 Untitled UI. All rights reserved.</span>
      </div>
    </div>
  </footer>
);
