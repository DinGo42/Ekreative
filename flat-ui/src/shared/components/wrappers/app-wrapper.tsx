import { BgStarsIcon } from '@flat-ui/icons';
import { FC, ReactNode } from 'react';
import { Header } from '../headers';
import { Footer } from '../footers';

type AppWrapperProps = {
  children: ReactNode;
};

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return (
    <>
      <BgStarsIcon className="absolute -z-50 opacity-20 w-screen h-screen overflow-hidden" />
      <div className="w-full h- h-fit flex-col items-center tabletS_Plus:pl-44 tabletS_Plus:pr-44 pl-10 pr-10 overflow-hidden">
        <Header />
        <div className="gap-10 flex flex-col">{children}</div>
      </div>
      <Footer />
    </>
  );
};
