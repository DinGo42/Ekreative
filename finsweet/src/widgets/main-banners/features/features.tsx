import { FC } from "react";
import { features } from "./constants";
import { BenefitList, ComponentWrapper } from "@finsweet/shared";

export const FeaturesBanner: FC = () => (
  <ComponentWrapper className="h-fit w-full flex-col gap-12 bg-blue-50">
    <div className="flex flex-col items-center gap-3">
      <span className="text-label-main">Features</span>
      <span className="w-full text-center text-h2 tabletM:w-2/3 desktopS:w-1/2">
        Design that solves problems, one product at a time
      </span>
    </div>
    <BenefitList
      benefitsList={features}
      cardClassName="bg-white-1000 text-opacity-70"
      className="grid-flow-row grid-cols-1 grid-rows-2 tabletSPlus:grid-cols-2 desktopS:grid-cols-3"
    />
  </ComponentWrapper>
);
