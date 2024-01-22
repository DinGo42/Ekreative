import { ComponentWrapper } from "@finsweet/shared";
import { pricingCards } from "./constants";
import { PricingCard } from "./price-card";
import { FC } from "react";

export const PricingBanner: FC = () => (
  <ComponentWrapper className="text-body-secondary h-fit flex-col gap-4">
    <span className="text-h2">Our Pricing Plans</span>
    <span className="text-center">
      When you’re ready to go beyond prototyping in Figma, Webflow is <br />
      ready to help you bring your designs to life — without coding them.
    </span>
    <div className="max-desktopS:gap-y-8 tabletM:grid-cols-2 desktopS:grid-cols-3 mt-12  grid h-full w-full grid-cols-1 gap-x-8">
      {pricingCards.map((card, index) => (
        <PricingCard {...card} key={index} />
      ))}
    </div>
  </ComponentWrapper>
);
