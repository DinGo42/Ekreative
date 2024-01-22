import { FC } from "react";
import { Step } from "./step";
import { stepsInfo } from "./constants";

export const Steps: FC = () => (
  <div className="max-desktopS:self-end max-tabletS:self-center phoneM:w-1/2 tabletS:w-full tabletS:grid-cols-2  tabletM:mr-24 tabletM:w-2/3 desktopS:w-full grid h-fit w-full grid-cols-1 justify-between gap-x-6 gap-y-12">
    {stepsInfo.map(({ id, text, title }) => (
      <Step stepIndex={id} stepText={text} stepTitle={title} key={id} />
    ))}
  </div>
);
