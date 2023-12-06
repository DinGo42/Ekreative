'use client';

import {
  useOptionalStyle,
  AnimationsTimingKeys,
  animations,
} from '@flat-ui/shared';
import { usePathname } from 'next/navigation';
import { ReactNode, FC } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

type TransitionWrapperProps = {
  children: ReactNode;
  prevRoute?: string;
  route?: string;
  isMain?: boolean;
};
//////////////подумати як його обіграти

const TransitionComponent = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  const { className, disableStyle } = useOptionalStyle({
    style: (isOpen: boolean) =>
      path === '/'
        ? animations.mainPage(isOpen)
        : animations.secondaryPage(isOpen),
    timing: AnimationsTimingKeys.LONG_PLUS,
  });

  disableStyle();
  return (
    <div
      className={twJoin('w-full min-h-screen h-fit relative overflow-hidden')}
    >
      <div
        className={twMerge(
          'bg-white absolute z-50 w-screen h-full transition-all',
          className
        )}
      />

      {children}
    </div>
  );
};
export const TransitionWrapper: FC<TransitionWrapperProps> = ({ children }) => {
  return (
    <>
      <TransitionComponent>
        <div
          className={twJoin(
            'w-full h-full transition-all duration-1000 animate-opacity'
          )}
        >
          {children}
        </div>
      </TransitionComponent>
    </>
  );
};
