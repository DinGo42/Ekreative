import { FAQ } from '@finsweet/shared';
import { pricingFAQ } from './constants';

export const FAQPricingBanner = () => (
  <FAQ
    faqList={pricingFAQ}
    title="Frequently asked questions"
    textSpaceClassName="tabletM:w-[32%]"
    titleClassName="text-xl"
  />
);
