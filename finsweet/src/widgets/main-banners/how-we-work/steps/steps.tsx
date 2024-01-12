import { FC } from 'react';
import { Step } from './step';
import { stepsInfo } from './constants';

export const Steps: FC = () => (
  <div className="grid tabletS:grid-cols-2 grid-cols-1 desktopS:w-full tabletM:w-2/3  tabletS:w-full phoneM:w-1/2 w-full h-fit justify-between gap-y-12 gap-x-6 tabletM:mr-24 max-desktopS:self-end max-tabletS:self-center">
    {stepsInfo.map(({ id, text, title }) => (
      <Step stepIndex={id} stepText={text} stepTitle={title} key={id} />
    ))}
  </div>
);
