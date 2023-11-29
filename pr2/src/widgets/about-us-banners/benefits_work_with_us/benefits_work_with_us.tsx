import { FC } from 'react';
import { BenefitList, ComponentWrapper, Sponsors } from '@pr2/shared';
import { reasonWorkWithUs } from './constants';

export const BenefitsWorkWithUsBanner: FC = () => (
  <ComponentWrapper className="w-full h-fit gap-12 flex-col">
    <span className="text-xl text-center">
      The benefits of working <br /> with us
    </span>
    <BenefitList benefitsList={reasonWorkWithUs} />
    <Sponsors />
  </ComponentWrapper>
);
