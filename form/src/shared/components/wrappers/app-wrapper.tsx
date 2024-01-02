'use client';
import { Routes } from '@form/shared';
import { redirect, usePathname } from 'next/navigation';
import { ReactNode, FC, useEffect } from 'react';
import { Logo } from '../logo';
import { XIcon } from '@form/icons';

type AppWrapperProps = {
  children: ReactNode;
};

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  const currentPathname = usePathname();

  useEffect(() => {
    const isAuthorized: boolean = JSON.parse(
      localStorage.getItem('is_authorized')!
    );
    (currentPathname !== Routes.REGISTRATION && isAuthorized) ??
      redirect(Routes.REGISTRATION);
  }, []);
  return (
    <div className="px-[88px] py-11 w-screen min-h-screen h-fit flex items-start">
      <Logo />
      <div className="w-full flex-col max-w-[460px] m-auto h-full flex bg-white gap-4">
        {children}
      </div>
      <div className="size-12 flex items-center justify-center">
        <XIcon style={{ scale: 2 }} />
      </div>
    </div>
  );
};
