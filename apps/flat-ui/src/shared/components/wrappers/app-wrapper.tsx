import { BgStarsIcon } from "@flat-ui/icons";
import { FC, ReactNode } from "react";
import { Header } from "../headers";
import { Footer } from "../footers";

type AppWrapperProps = {
  children: ReactNode;
};

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return (
    <>
      <BgStarsIcon className="absolute -z-50 h-screen w-screen overflow-hidden opacity-20" />
      <div className="h- tabletSPlus:pl-44 tabletSPlus:pr-44 h-fit w-full flex-col items-center overflow-hidden pl-10 pr-10">
        <Header />
        <div className="flex flex-col gap-10">{children}</div>
      </div>
      <Footer />
    </>
  );
};
