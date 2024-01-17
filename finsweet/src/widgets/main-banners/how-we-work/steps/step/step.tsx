import { FC } from "react";
import { Card } from "@finsweet/shared";
import { Pointer } from "./pointer";
export type StepProps = {
  stepIndex: number;
  stepTitle: string;
  stepText: string;
};
export const Step: FC<StepProps> = ({ stepIndex, stepText, stepTitle }) => (
  <Card
    text={stepText}
    title={stepTitle}
    className={"flex h-full w-fit flex-col gap-2 p-0"}
    titleClassName={"text-h5 w-fit mt-2"}
    icon={<Pointer index={stepIndex} />}
  />
);
