import { FC } from 'react';
import { ComponentWrapper, InfoCard } from '@finsweet/shared';
import { ourMovementDirection } from './constants';
import { twMerge } from 'tailwind-merge';

export const WorkProcessBanner: FC = () => (
  <>
    <ComponentWrapper className="flex-col gap-1 text-h2">
      <span>The process we follow</span>
      <div className="flex w-full max-tabletM:grid max-tabletM:grid-cols-2 max-phoneM:grid-cols-1  gap-14 mt-14">
        <div className="flex flex-col w-full h-full text-body-main gap-2">
          <div className=" mb-6 w-full h-6 overflow-hidden before:block before:rounded-full before:w-6 before:h-6 before:bg-blue-700 after:w-full after:-mt-4 after:opacity-40 after:border-t-[5px] after:border-dotted after:border-blue-700 after:ml-12 after:block after:h-1" />

          <span className="text-h6">Planning</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
        <div className="flex flex-col w-full h-full text-body-main">
          <div className=" mb-6 w-full h-6 overflow-hidden before:block before:rounded-full before:w-6 before:h-6 before:bg-blue-700 after:w-full after:-mt-4 after:opacity-40 after:border-t-[5px] after:border-dotted after:border-blue-700 after:ml-12 after:block after:h-1" />

          <span className="text-h6">Conception</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
        <div className="flex flex-col w-full h-full text-body-main">
          <div className=" mb-6 w-full h-6 overflow-hidden before:block before:rounded-full before:w-6 before:h-6 before:bg-blue-700 after:w-full after:-mt-4 after:opacity-40 after:border-t-[5px] after:border-dotted after:border-blue-700 after:ml-12 after:block after:h-1" />

          <span className="text-h6">Design</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
        <div className="flex flex-col w-full h-full text-body-main">
          <div className=" mb-6 w-full h-6 overflow-hidden before:block before:rounded-full before:w-6 before:h-6 before:bg-blue-700 after:w-full after:-mt-4 after:opacity-40 after:border-t-[5px] after:border-dotted after:border-blue-700 after:ml-12 after:block after:h-1" />

          <span className="text-h6">Development</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
      </div>
    </ComponentWrapper>
    {ourMovementDirection.map(({ cardClassName, ...card }, index) => (
      <InfoCard
        {...card}
        key={index}
        cardClassName={twMerge(
          'max-tabletSPlus:flex-col max-tabletSPlus:gap-10',
          cardClassName
        )}
      />
    ))}
  </>
);
