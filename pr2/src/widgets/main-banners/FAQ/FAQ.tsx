import { FC } from 'react';
import { FAQ } from '@pr2/shared';
import { mainFAQ } from './constants';

export const FAQBanner: FC = () => (
  <FAQ
    faqList={mainFAQ}
    title="Frequently asked questions"
    className="max-tabletS_Plus:flex-col"
  />
);
