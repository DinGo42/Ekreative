import { StepIcon } from "@finsweet/icons";
import { FC } from "react";

type PointerProps = {
  index: number;
};
export const Pointer: FC<PointerProps> = ({ index }) => (
  <div className="relative z-0 flex h-fit w-fit items-center justify-center">
    <StepIcon />
    <span className=" text-label-main text-white-1000 absolute self-center">{index < 9 ? "0" + index : index}</span>
  </div>
);
