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
      <div className="tabletS:py-11 pt-2 pb-10">
        <header className="flex w-full items-center justify-between relative tabletS:px-[88px] pr-2 pl-6">
          <Logo />
          <Button className="size-12 flex items-center justify-center">
            <XIcon style={{ scale: 2 }} />
          </Button>
        </header>
        <div className="w-full flex-col max-w-[460px] h-full flex items-center bg-white gap-4 m-auto tabletS:-mt-6 mt-12">
          {children}
        </div>
      </div>
    </>
  );
};
