import { FC } from 'react';
import { ComponentWrapper, InfoCard } from '@pr2/shared';
import { ourMovementDirection } from './constants';

export const WorkProcessBanner: FC = () => (
  <>
    <ComponentWrapper className="flex-col gap-1 text-xl">
      <span>The process we follow</span>
      <div className="flex w-full gap-14 mt-14">
        <div className="flex flex-col w-full h-full text-bs-1 gap-2">
          <div className=" mb-6" />
          {/* ///progress-dot */}
          <span className="text-xs">Planning</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
        <div className="flex flex-col w-full h-full text-bs-1">
          <div className=" mb-6" />
          {/* ///progress-dot */}
          <span className="text-xs">Conception</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
        <div className="flex flex-col w-full h-full text-bs-1">
          <div className=" mb-6" />
          {/* ///progress-dot */}
          <span className="text-xs">Design</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
        <div className="flex flex-col w-full h-full text-bs-1">
          <div className=" mb-6" />
          {/* ///progress-dot */}
          <span className="text-xs">Development</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
      </div>
    </ComponentWrapper>
    {ourMovementDirection.map((card, index) => (
      <InfoCard {...card} key={index} />
    ))}
  </>
);
