import { FC } from 'react';
import { DropDown } from '@pr2/shared';

type FAQCardProps = {
  question: string;
  answer: string;
  index: number;
};

export const FAQCard: FC<FAQCardProps> = ({ answer, index, question }) => {
  const newIndex = index + 1;
  return <DropDown answer={answer} index={newIndex} question={question} />;
};
