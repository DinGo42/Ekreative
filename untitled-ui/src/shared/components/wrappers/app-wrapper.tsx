import { FC, ReactNode } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

type AppWrapperProps = {
  children: ReactNode;
};
export const AppWrapper: FC<AppWrapperProps> = ({ children }) => (
  <div className="p-4 flex flex-col gap-12">
    <Header />
    {children}
    <Footer />
  </div>
);
