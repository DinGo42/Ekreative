import { FC } from 'react';
import { DropDown } from '@pr2/shared';

type FAQPricingCardProps = {
  question: string;
  answer: string;
  index: number;
};

export const FAQPricingCard: FC<FAQPricingCardProps> = ({
  answer,
  index,
  question,
}) => {
  const newIndex = index + 1;
  return <DropDown answer={answer} index={newIndex} question={question} />;
};
