import { FC } from 'react';
import { BenefitList, ComponentWrapper, Sponsors } from '@finsweet/shared';
import { reasonWorkWithUs } from './constants';

export const BenefitsWorkWithUsBanner: FC = () => (
  <ComponentWrapper className="w-full h-fit gap-12 flex-col">
    <span className="text-xl text-center tabletS:w-1/2 w-full">
      The benefits of working with us
    </span>
    <BenefitList
      benefitsList={reasonWorkWithUs}
      className="max-tabletM:grid-rows-3 max-tabletM:grid-cols-1"
    />
    <Sponsors />
  </ComponentWrapper>
);
