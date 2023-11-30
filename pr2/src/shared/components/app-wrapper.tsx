import { Footer, Header } from '@pr2/widgets';
import { FC, ReactNode } from 'react';

type AppWrapperProps = {
  children: ReactNode;
};
export const AppWrapper: FC<AppWrapperProps> = ({ children }) => (
  <div className="w-full h-fit flex flex-col relative justify-between text-blue-1000">
    {/* <Header /> */}
    {children}
    {/* <Footer /> */}
  </div>
);
