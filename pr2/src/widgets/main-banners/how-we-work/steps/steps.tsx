import { FC } from 'react';
import { Step } from './step';
import { stepsInfo } from './constants';

export const Steps: FC = () => (
  <div className="grid grid-cols-2 w-full h-fit justify-between gap-y-12 gap-x-6 mr-24">
    {stepsInfo.map(({ id, text, title }) => (
      <Step stepIndex={id} stepText={text} stepTitle={title} key={id} />
    ))}
  </div>
);
