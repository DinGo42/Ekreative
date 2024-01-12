import { ComponentWrapper } from '@finsweet/shared';
import { pricingCards } from './constants';
import { PricingCard } from './price-card';
import { FC } from 'react';

export const PricingBanner: FC = () => (
  <ComponentWrapper className="flex-col text-body-secondary h-fit gap-4">
    <span className="text-h2">Our Pricing Plans</span>
    <span className="text-center">
      When you’re ready to go beyond prototyping in Figma, Webflow is <br />
      ready to help you bring your designs to life — without coding them.
    </span>
    <div className="grid desktopS:grid-cols-3 tabletM:grid-cols-2 grid-cols-1  w-full h-full gap-x-8 mt-12 max-desktopS:gap-y-8">
      {pricingCards.map((card, index) => (
        <PricingCard {...card} key={index} />
      ))}
    </div>
  </ComponentWrapper>
);
