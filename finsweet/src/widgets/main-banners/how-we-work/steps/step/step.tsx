import { FC } from 'react';
import { Pointer } from '../pointer';
import { Card } from '@finsweet/shared';
import { twMerge } from 'tailwind-merge';
export type StepProps = {
  stepIndex: number;
  stepTitle: string;
  stepText: string;
};
export const Step: FC<StepProps> = ({ stepIndex, stepText, stepTitle }) => (
  <Card
    text={stepText}
    title={stepTitle}
    className={'flex flex-col w-fit h-full gap-2 p-0'}
    titleClassName={'text-sm w-fit mt-2'}
    icon={<Pointer index={stepIndex} />}
  />
);
