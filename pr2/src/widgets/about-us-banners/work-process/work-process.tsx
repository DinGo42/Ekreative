import { FC } from 'react';
import { ComponentWrapper, InfoCard } from '@pr2/shared';
import { ourMovementDirection } from './constants';

export const WorkProcessBanner: FC = () => (
  <>
    <ComponentWrapper className="flex-col gap-1 text-xl">
      <span>The process we follow</span>
      <div className="flex w-full gap-14 mt-14">
        <div className="flex flex-col w-full h-full text-bs-1 gap-2">
          <div className=" mb-6 w-full h-6 overflow-hidden before:block before:rounded-full before:w-6 before:h-6 before:bg-blue-700 after:w-full after:-mt-4 after:opacity-40 after:border-t-[5px] after:border-dotted after:border-blue-700 after:ml-12 after:block after:h-1" />

          <span className="text-xs">Planning</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
        <div className="flex flex-col w-full h-full text-bs-1">
          <div className=" mb-6 w-full h-6 overflow-hidden before:block before:rounded-full before:w-6 before:h-6 before:bg-blue-700 after:w-full after:-mt-4 after:opacity-40 after:border-t-[5px] after:border-dotted after:border-blue-700 after:ml-12 after:block after:h-1" />

          <span className="text-xs">Conception</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
        <div className="flex flex-col w-full h-full text-bs-1">
          <div className=" mb-6 w-full h-6 overflow-hidden before:block before:rounded-full before:w-6 before:h-6 before:bg-blue-700 after:w-full after:-mt-4 after:opacity-40 after:border-t-[5px] after:border-dotted after:border-blue-700 after:ml-12 after:block after:h-1" />

          <span className="text-xs">Design</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
        <div className="flex flex-col w-full h-full text-bs-1">
          <div className=" mb-6 w-full h-6 overflow-hidden before:block before:rounded-full before:w-6 before:h-6 before:bg-blue-700 after:w-full after:-mt-4 after:opacity-40 after:border-t-[5px] after:border-dotted after:border-blue-700 after:ml-12 after:block after:h-1" />

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
