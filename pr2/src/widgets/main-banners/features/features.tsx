import { FC } from 'react';
import { features } from './constants';
import { BenefitList, ComponentWrapper } from '@pr2/shared';

export const FeaturesBanner: FC = () => (
  <ComponentWrapper className="w-full h-fit bg-blue-50 gap-12 flex-col">
    <div className="flex flex-col items-center gap-3">
      <span className="text-lb-1">Features</span>
      <span className="text-xl text-center w-1/2">
        Design that solves problems, one product at a time
      </span>
    </div>
    <BenefitList
      benefitsList={features}
      cardClassName="bg-white-1000 text-opacity-70"
      className="grid-rows-2 grid-cols-3 grid-flow-row"
    />
  </ComponentWrapper>
);
