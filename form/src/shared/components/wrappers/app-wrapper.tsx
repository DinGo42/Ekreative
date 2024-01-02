'use client';
import { Routes } from '@form/shared';
import { redirect, usePathname } from 'next/navigation';
import { ReactNode, FC, useEffect } from 'react';

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
    <div className="w-full flex-col max-w-[460px] m-auto min-h-screen h-fit flex bg-white gap-4">
      {children}
    </div>
  );
};
