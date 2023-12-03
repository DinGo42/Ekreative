import { ComponentWrapper } from '@pr2/shared';
import { FC } from 'react';
import { OurTeamUI } from './our-team-ui';

export const OurTeamBanner: FC = () => (
  <ComponentWrapper className="flex-col bg-blue-50 gap-12">
    <span className="text-xl">Meet our team</span>
    <div className="flex w-full h-full gap-10 max-dectopS:grid max-dectopS:grid-cols-2 max-phoneM:grid-cols-1">
      <OurTeamUI />
    </div>
  </ComponentWrapper>
);
