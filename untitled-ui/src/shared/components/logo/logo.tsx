import { FC } from "react";
import { twJoin } from "tailwind-merge";

type LogoProps = {
  textClassName?: string;
};
export const Logo: FC<LogoProps> = ({ textClassName = "text-black-900" }) => (
  <div className="flex w-fit items-center gap-2">
    <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-purple-800 before:absolute before:h-1/2 before:w-full after:absolute after:h-4 after:w-4 after:rounded-full after:bg-white" />
    <span className={twJoin("text-semibold", textClassName)}>Untitled UI</span>
  </div>
);
