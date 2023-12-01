import { FC } from 'react';
import { ComponentWrapper, Link, Routs } from '@pr2/shared';
import { mainFAQ } from './constants';
import { FAQCard } from './FAQ-card';

export const FAQBanner: FC = () => (
  <ComponentWrapper className="gap-32 items-start">
    <div className="flex flex-col gap-4">
      <span className="text-lg">Frequently asked questions</span>
      <Link href={Routs.CONTACT_US} className="text-lb-1 text-blue-700">
        Contact us for more info
      </Link>
    </div>
    <div className="flex flex-col w-full h-fit">
      {mainFAQ.map((item, index) => (
        <FAQCard key={index} {...item} index={index} />
      ))}
    </div>
  </ComponentWrapper>
);
