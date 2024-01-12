import { StepIcon } from '@finsweet/icons';
import { FC } from 'react';

type PointerProps = {
  index: number;
};
export const Pointer: FC<PointerProps> = ({ index }) => (
  <div className="relative flex w-fit h-fit justify-center items-center z-0">
    <StepIcon />
    <span className=" absolute self-center text-white-1000 text-label-main">
      {index < 9 ? '0' + index : index}
    </span>
  </div>
);
