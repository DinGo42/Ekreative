import { FC, ReactNode } from "react";
import { Footer } from "../footer";
import { Header } from "../header";

type AppWrapperProps = {
  children: ReactNode;
};
export const AppWrapper: FC<AppWrapperProps> = ({ children }) => (
  <div className="relative flex h-fit w-full flex-col justify-between text-blue-1000">
    <Header />
    {children}
    <Footer />
  </div>
);
