import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type MarkProps = {
  text: string | ReactNode;
  className: string;
};

export const Tag: FC<MarkProps> = ({ className, text }) => (
  <div className={twMerge(className, "flex w-fit items-center justify-center rounded-full border-[1px] px-2 py-[2xp]")}>
    {text}
  </div>
);
