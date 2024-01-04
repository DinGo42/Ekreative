import { ComponentWrapper } from '@finsweet/shared';
import { WorksUI } from './works-ui';
import { FC } from 'react';

export const WorksBanner:FC = () => {
  return (
    <ComponentWrapper className="flex-col gap-12">
      <WorksUI />
    </ComponentWrapper>
  );
};
