import { FC } from "react";
import { BenefitList, ComponentWrapper, Sponsors } from "@finsweet/shared";
import { reasonWorkWithUs } from "./constants";

export const BenefitsWorkWithUsBanner: FC = () => (
  <ComponentWrapper className="h-fit w-full flex-col gap-12">
    <span className="text-h2 tabletS:w-1/2 w-full text-center">The benefits of working with us</span>
    <BenefitList benefitsList={reasonWorkWithUs} className="max-tabletM:grid-cols-1 max-tabletM:grid-rows-3" />
    <Sponsors />
  </ComponentWrapper>
);
