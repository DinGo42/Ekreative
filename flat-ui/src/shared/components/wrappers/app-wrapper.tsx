import { BgStarsIcon } from '@flat-ui/icons';
import { FC, ReactNode } from 'react';
import { Header } from '../header';

type AppWrapperProps = {
  children: ReactNode;
};

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => (
  <div className="w-full h- h-fit flex-col items-center pl-44 pr-44">
    <BgStarsIcon className="absolute -z-10 opacity-20" />
    <Header />
    <div className="gap-10 flex flex-col">{children}</div>
  </div>
);
