import { FC } from 'react';
import { features } from './constants';
import { BenefitList, ComponentWrapper } from '@finsweet/shared';

export const FeaturesBanner: FC = () => (
  <ComponentWrapper className="w-full h-fit bg-blue-50 gap-12 flex-col">
    <div className="flex flex-col items-center gap-3">
      <span className="text-lb-1">Features</span>
      <span className="text-xl text-center dectopS:w-1/2 tabletM:w-2/3 w-full">
        Design that solves problems, one product at a time
      </span>
    </div>
    <BenefitList
      benefitsList={features}
      cardClassName="bg-white-1000 text-opacity-70"
      className="grid-rows-2 dectopS:grid-cols-3 grid-flow-row tabletS_Plus:grid-cols-2 grid-cols-1"
    />
  </ComponentWrapper>
);
