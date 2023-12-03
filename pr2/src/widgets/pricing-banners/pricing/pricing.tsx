import { ComponentWrapper } from '@pr2/shared';
import { pricingCards } from './constants';
import { PricingCard } from './price-card';

export const PricingBanner = () => (
  <ComponentWrapper className="flex-col text-bs-2 h-fit gap-4">
    <span className="text-xl">Our Pricing Plans</span>
    <span className="text-center">
      When you’re ready to go beyond prototyping in Figma, Webflow is <br />
      ready to help you bring your designs to life — without coding them.
    </span>
    <div className="grid dectopS:grid-cols-3 tabletM:grid-cols-2 grid-cols-1  w-full h-full gap-x-8 mt-12 max-dectopS:gap-y-8">
      {pricingCards.map((card, index) => (
        <PricingCard {...card} key={index} />
      ))}
    </div>
  </ComponentWrapper>
);
