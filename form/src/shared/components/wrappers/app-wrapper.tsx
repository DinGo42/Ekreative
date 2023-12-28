import { ReactNode, FC } from 'react';

type AppWrapperProps = {
  children: ReactNode;
};

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => (
  <div className="w-full flex-col max-w-[460px] m-auto min-h-screen h-fit flex bg-white gap-4">
    {children}
  </div>
);
