import { FC, ReactNode } from 'react';
import { Header } from '../header';

type AppWrapperProps = {
  children: ReactNode;
};
export const AppWrapper: FC<AppWrapperProps> = ({ children }) => (
  <div className="px-4 flex flex-col gap-16 max-w-[1280px] m-auto">
    <Header />
    {children}
  </div>
);
