import { Tags } from '@untitled/shared';
import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type MarkProps = {
  text: string | ReactNode;
  className: string;
};

export const Tag: FC<MarkProps> = ({ className, text }) => (
  <div
    className={twMerge(
      className,
      'py-[2xp] px-2 border-[1px] rounded-full w-fit flex items-center justify-center'
    )}
  >
    {text}
  </div>
);
