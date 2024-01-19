import { FC, ReactNode } from "react";
import { Header } from "../header";

type AppWrapperProps = {
  children: ReactNode;
};
export const AppWrapper: FC<AppWrapperProps> = ({ children }) => (
  <div className="m-auto flex max-w-[1280px] flex-col gap-16 px-4">
    <Header />
    {children}
  </div>
);
