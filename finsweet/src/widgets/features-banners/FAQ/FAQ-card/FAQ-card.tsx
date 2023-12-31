import { FC } from 'react';
import { DropDown } from '@finsweet/shared';

export type FAQCardProps = {
  question: string;
  answer: string;
  index: number;
};

export const FAQCard: FC<FAQCardProps> = ({ answer, index, question }) => (
  <DropDown answer={answer} index={index + 1} question={question} />
);
