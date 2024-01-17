import { Routs } from "@finsweet/shared";
import { DropDown } from "../dropdown";
import { ComponentWrapper } from "../wrappers";
import { Link } from "../links";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export type FAQProps = {
  title: string;
  className?: string;
  titleClassName?: string;
  textSpaceClassName?: string;
  faqList: {
    question: string;
    answer: string;
  }[];
};

export const FAQ: FC<FAQProps> = ({ faqList, title, titleClassName, textSpaceClassName, className }) => (
  <ComponentWrapper
    className={twMerge("items-start justify-between max-tabletM:flex-col max-tabletM:gap-16", className)}
  >
    <div className={twMerge("flex w-full flex-col gap-4 tabletM:w-[25%]", textSpaceClassName)}>
      <span className={twMerge("text-h3", titleClassName)}>{title}</span>
      <Link href={Routs.CONTACT_US} className="text-label-main text-blue-700 text-opacity-90">
        Contact us for more info
      </Link>
    </div>
    <div className="-mt-10 flex h-fit w-full flex-col tabletM:w-[66%]">
      {faqList.map((item, index) => (
        <DropDown {...item} index={index + 1} key={index} />
      ))}
    </div>
  </ComponentWrapper>
);
