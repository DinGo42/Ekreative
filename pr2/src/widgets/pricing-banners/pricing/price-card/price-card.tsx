import { FC } from 'react';

import { Button, ButtonStyleTypes } from '@pr2/shared';
import { TriangleActiveIcon, TriangleDisabledIcon } from '@pr2/icons';

export type PricingCardProps = {
  price: number;
  priceDescriprion: string;
  priceType: string;
  cardName: string;
  cardDescription: string;
  specialPriceSymbol: string;
  buttonText: string;
  cardBenefits: { name: string; included: boolean }[];
};

export const PricingCard: FC<PricingCardProps> = ({
  cardBenefits,
  cardDescription,
  cardName,
  price,
  buttonText,
  specialPriceSymbol,
  priceDescriprion,
  priceType,
}) => (
  <div
    className="group hover:bg-blue-900 hover:text-white-1000 w-full
  h-full
  flex
  flex-col
  pt-16
  p-12
  pb-16
  gap-2
  bg-blue-50
  rounded-xl
  text-bs-1
  duration-500
  hover:scale-105
  transition-all"
  >
    <div className="flex gap-2 mb-3 items-center text-lg">
      <span>{priceType + price + specialPriceSymbol}</span>
      <span className="text-bs-1 text-blue-700 group-hover:text-yellow-90">
        {priceDescriprion}
      </span>
    </div>
    <span className="text-xs">{cardName}</span>
    <span className="text-bs-2">{cardDescription}</span>
    <div className="mt-16 w-full h-full flex flex-col gap-5">
      {cardBenefits.map(({ included, name }, index) => (
        <div key={index} className="flex items-center gap-3">
          {included ? <TriangleActiveIcon /> : <TriangleDisabledIcon />}
          {name}
        </div>
      ))}
    </div>
    <Button
      styleType={ButtonStyleTypes.SECONDARY}
      className="mt-16 group-hover:bg-yellow-90 w-fit pr-20 pl-20 self-center"
    >
      {buttonText}
    </Button>
  </div>
);
