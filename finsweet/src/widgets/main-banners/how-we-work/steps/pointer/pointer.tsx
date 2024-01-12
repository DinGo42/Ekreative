import { Colors } from '@finsweet/tailwindConfig';
import { FC } from 'react';

type PointerProps = {
  index: number;
};
export const Pointer: FC<PointerProps> = ({ index }) => (
  <div className="relative flex w-fit h-fit justify-center items-center z-0">
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect width="50" height="50" rx="8" fill={Colors['blue-700']} />
      <mask
        id="mask0_706_725"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="50"
        height="50"
      >
        <rect width="50" height="50" rx="8" fill="#5C5E84" />
      </mask>
      <g mask="url(#mask0_706_725)">
        <rect
          x="-26"
          y="27"
          width="50"
          height="50"
          rx="8"
          fill={Colors['yellow-90']}
        />
        <rect x="8" y="-9" width="50" height="50" rx="8" fill="#5239FA" />
      </g>
    </svg>
    <span className=" absolute self-center text-white-1000 text-label-main">
      {index < 9 ? '0' + index : index}
    </span>
  </div>
);
