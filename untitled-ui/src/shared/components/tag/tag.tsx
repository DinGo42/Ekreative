import { Tags } from '@untitled/shared';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type MarkProps = {
  text: string;
  className: string;
};

export const Tag: FC<MarkProps> = ({ className, text }) => (
  <div
    className={twMerge(
      className,
      'pt-[2xp] pb-[2px] pl-2 pr-2 border-[1px] rounded-full w-fit'
    )}
  >
    {text}
  </div>
);
