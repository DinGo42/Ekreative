import { FC } from 'react';
import { twJoin } from 'tailwind-merge';

type LogoProps = {
  textClassName?: string;
};
export const Logo: FC<LogoProps> = ({ textClassName = 'text-black-900' }) => (
  <div className="flex gap-2 items-center w-fit">
    <div className="w-8 h-8 before:w-full before:absolute before:h-1/2 bg-purple-800 rounded-lg after:bg-white after:w-4 after:h-4 after:rounded-full after:absolute relative flex items-center justify-center" />
    <span className={twJoin('text-semibold', textClassName)}>Untitled UI</span>
  </div>
);
