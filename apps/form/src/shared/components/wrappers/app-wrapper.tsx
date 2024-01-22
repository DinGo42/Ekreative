"use client";
import { Button, Routes } from "@form/shared";
import { localStorageUtilsGenerator } from "../../utils";
import { redirect, usePathname } from "next/navigation";
import { ReactNode, FC, useEffect } from "react";
import { Logo } from "../logo";
import { XIcon } from "@form/icons";

type AppWrapperProps = {
  children: ReactNode;
};

const { get: getIsAuthorized } = localStorageUtilsGenerator<boolean>("is_authorized");

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  const currentPathname = usePathname();

  useEffect(() => {
    const isAuthorized = getIsAuthorized();
    (currentPathname !== Routes.REGISTRATION && isAuthorized) ?? redirect(Routes.REGISTRATION);
  }, [currentPathname]);
  return (
    <>
      <div className="tabletS:py-11 pb-10 pt-2">
        <header className="tabletS:px-[88px] relative flex w-full items-center justify-between pl-6 pr-2">
          <Logo />
          <Button className="flex size-12 items-center justify-center">
            <XIcon style={{ scale: 2 }} />
          </Button>
        </header>
        <div className="tabletS:-mt-6 m-auto mt-12 flex h-full w-full max-w-[460px] flex-col items-center gap-4 bg-white">
          {children}
        </div>
      </div>
    </>
  );
};
