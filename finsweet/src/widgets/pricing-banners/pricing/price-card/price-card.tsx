import { FC } from "react";

import { Button, ButtonStyleTypes } from "@finsweet/shared";
import { TriangleActiveIcon, TriangleDisabledIcon } from "@finsweet/icons";

export type PricingCardProps = {
  price: number;
  priceDescription: string;
  priceType: string;
  cardName: string;
  cardDescription: string;
  specialPriceSymbol: string;
  buttonText: string;
  cardBenefits: {
    name: string;
    included: boolean;
  }[];
};

export const PricingCard: FC<PricingCardProps> = ({
  cardBenefits,
  cardDescription,
  cardName,
  price,
  buttonText,
  specialPriceSymbol,
  priceDescription,
  priceType,
}) => (
  <div
    className="rounded-h2 group flex h-full
  w-full
  flex-col
  gap-2
  rounded-xl
  bg-blue-50
  p-12
  pb-16
  pt-16
  text-body-main
  transition-all
  duration-500
  hover:scale-105
  hover:bg-blue-900
  hover:text-white-1000"
  >
    <div className="mb-3 flex items-center gap-2 text-h3 max-phoneM:flex-col">
      <span>{priceType + price + specialPriceSymbol}</span>
      <span className="text-body-main text-blue-700 group-hover:text-yellow-90">{priceDescription}</span>
    </div>
    <span className="text-h6">{cardName}</span>
    <span className="text-body-secondary">{cardDescription}</span>
    <div className="mt-16 flex h-full w-full flex-col gap-5">
      {cardBenefits.map(({ included, name }, index) => (
        <div key={index} className="flex items-center gap-3">
          {included ? <TriangleActiveIcon /> : <TriangleDisabledIcon />}
          {name}
        </div>
      ))}
    </div>
    <Button
      styleType={ButtonStyleTypes.SECONDARY}
      className="mt-16 w-fit self-center pl-20 pr-20 group-hover:bg-yellow-90"
    >
      {buttonText}
    </Button>
  </div>
);
