import { FC } from "react";
import { ComponentWrapper, InfoCard } from "@finsweet/shared";
import { ourMovementDirection } from "./constants";
import { twMerge } from "tailwind-merge";

export const WorkProcessBanner: FC = () => (
  <>
    <ComponentWrapper className="text-h2 flex-col gap-1">
      <span>The process we follow</span>
      <div className="max-tabletM:grid max-tabletM:grid-cols-2 max-phoneM:grid-cols-1 mt-14 flex  w-full gap-14">
        <div className="text-body-main flex h-full w-full flex-col gap-2">
          <div className=" mb-6 h-6 w-full overflow-hidden before:block before:h-6 before:w-6 before:rounded-full before:bg-blue-700 after:-mt-4 after:ml-12 after:block after:h-1 after:w-full after:border-t-[5px] after:border-dotted after:border-blue-700 after:opacity-40" />

          <span className="text-h6">Planning</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
        <div className="text-body-main flex h-full w-full flex-col">
          <div className=" mb-6 h-6 w-full overflow-hidden before:block before:h-6 before:w-6 before:rounded-full before:bg-blue-700 after:-mt-4 after:ml-12 after:block after:h-1 after:w-full after:border-t-[5px] after:border-dotted after:border-blue-700 after:opacity-40" />

          <span className="text-h6">Conception</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
        <div className="text-body-main flex h-full w-full flex-col">
          <div className=" mb-6 h-6 w-full overflow-hidden before:block before:h-6 before:w-6 before:rounded-full before:bg-blue-700 after:-mt-4 after:ml-12 after:block after:h-1 after:w-full after:border-t-[5px] after:border-dotted after:border-blue-700 after:opacity-40" />

          <span className="text-h6">Design</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
        <div className="text-body-main flex h-full w-full flex-col">
          <div className=" mb-6 h-6 w-full overflow-hidden before:block before:h-6 before:w-6 before:rounded-full before:bg-blue-700 after:-mt-4 after:ml-12 after:block after:h-1 after:w-full after:border-t-[5px] after:border-dotted after:border-blue-700 after:opacity-40" />

          <span className="text-h6">Development</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span>
        </div>
      </div>
    </ComponentWrapper>
    {ourMovementDirection.map(({ cardClassName, ...card }, index) => (
      <InfoCard
        {...card}
        key={index}
        cardClassName={twMerge("max-tabletSPlus:flex-col max-tabletSPlus:gap-10", cardClassName)}
      />
    ))}
  </>
);
