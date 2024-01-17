import { LogoIcon } from "@form/icons";
import { FC } from "react";
import { twJoin } from "tailwind-merge";

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => (
  <div className={twJoin("flex items-center gap-[13px]", className)}>
    <LogoIcon />
    <span className="text-large-secondary uppercase text-black">company name</span>
  </div>
);
