import { ComponentWrapper } from '@finsweet/shared';
import { WorksUI } from './works-ui';

export const WorksBanner = () => {
  return (
    <ComponentWrapper className="flex-col gap-12">
      <WorksUI />
    </ComponentWrapper>
  );
};
