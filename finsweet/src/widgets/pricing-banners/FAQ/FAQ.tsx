import { FAQ } from '@finsweet/shared';
import { pricingFAQ } from './constants';
import { FC } from 'react';

export const FAQPricingBanner:FC = () => (
  <FAQ
    faqList={pricingFAQ}
    title="Frequently asked questions"
    textSpaceClassName="tabletM:w-[32%]"
    titleClassName="text-xl"
  />
);
