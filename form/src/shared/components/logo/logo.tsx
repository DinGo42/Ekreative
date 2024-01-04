import { LogoIcon } from '@form/icons';
import { FC } from 'react';
import { twJoin } from 'tailwind-merge';

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => (
  <div className={twJoin('flex gap-[13px] items-center', className)}>
    <LogoIcon />
    <span className="text-black text-large-secondary uppercase">
      company name
    </span>
  </div>
);
