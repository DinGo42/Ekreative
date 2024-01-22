import { Logo } from "../../logo";

import { Mailing } from "./mailing";
import { Categories } from "../categories";
import { FC } from "react";

export const BlogFooter: FC = () => (
  <footer className="tabletS:gap-16 flex flex-col pb-12">
    <div className="max-tabletS:flex-col tabletS:justify-between flex w-full gap-12">
      <div className="flex flex-col gap-8">
        <Logo />
        <Categories
          categoriesArray={[
            { category: "Overview" },
            { category: "Features" },
            { category: "Pricing" },
            { category: "Careers" },
            { category: "Help" },
            { category: "Privacy" },
          ]}
        />
      </div>
      <Mailing />
    </div>
    <div className="text-medium-regular tabletS:flex-row-reverse tabletS:justify-between mt-4 flex flex-wrap gap-4 border-t-[1px] border-gray-100 pt-8 text-gray-600">
      <div className="text-medium-regular flex flex-wrap gap-4 text-gray-600">
        <span>Terms</span>
        <span>Privacy</span>
        <span>Cookies</span>
      </div>
      <span>© 2077 Untitled UI. All rights reserved.</span>
    </div>
  </footer>
);
