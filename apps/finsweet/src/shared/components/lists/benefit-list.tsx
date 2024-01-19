import { FC, ReactNode } from "react";
import { Card } from "../cards";
import { twMerge } from "tailwind-merge";

export type BenefitListProps = {
  benefitsList: {
    icon: ReactNode;
    title: string;
    text: string;
  }[];
  className?: string;
  cardClassName?: string;
};

export const BenefitList: FC<BenefitListProps> = ({ benefitsList, className, cardClassName }) => (
  <div className={twMerge("grid h-fit w-full grid-flow-col grid-cols-3 grid-rows-1 gap-8", className)}>
    {benefitsList.map((card, index) => (
      <Card {...card} key={index} className={cardClassName} />
    ))}
  </div>
);
