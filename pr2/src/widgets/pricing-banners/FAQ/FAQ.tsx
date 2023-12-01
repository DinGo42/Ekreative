import { ComponentWrapper, Link, Routs } from '@pr2/shared';
import { pricingFAQ } from './constants';
import { FAQPricingCard } from './FAQ-card';

export const FAQPricingBanner = () => (
  <ComponentWrapper className="gap-6 items-start">
    <div className="flex flex-col gap-4 w-1/3">
      <span className="text-xl">
        Frequently <br /> asked questions
      </span>
      <Link href={Routs.CONTACT_US} className="text-lb-1 text-blue-700">
        Contact us for more info
      </Link>
    </div>
    <div className="flex flex-col h-fit">
      {pricingFAQ.map((card, index) => (
        <FAQPricingCard key={index} {...card} index={index} />
      ))}
    </div>
  </ComponentWrapper>
);
