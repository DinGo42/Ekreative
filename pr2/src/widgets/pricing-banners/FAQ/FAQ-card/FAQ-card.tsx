import { FC } from 'react';
import { DropDown } from '@finsweet/shared';

export type FAQPricingCardProps = {
  question: string;
  answer: string;
  index: number;
};

export const FAQPricingCard: FC<FAQPricingCardProps> = ({
  answer,
  index,
  question,
}) => <DropDown answer={answer} index={index + 1} question={question} />;
