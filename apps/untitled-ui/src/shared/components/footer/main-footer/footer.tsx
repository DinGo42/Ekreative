import { FC } from "react";
import { Logo } from "../../logo";
import { twJoin } from "tailwind-merge";
import { Categories, navigationData } from "../categories";

type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => (
  <footer className={twJoin("flex flex-col gap-12", className)}>
    {<Categories categoriesArray={navigationData} />}
    <div className="tabletM:pb-12 tabletM:pt-16 flex w-full flex-wrap items-center justify-between gap-6 border-t-2 border-gray-100 pt-8">
      <Logo />
      <span className="text-small-regular text-gray-600">© 2077 Untitled UI. All rights reserved.</span>
    </div>
  </footer>
);
