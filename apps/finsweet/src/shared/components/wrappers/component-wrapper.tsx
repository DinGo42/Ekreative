import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ComponentWrapperProps = {
  children: ReactNode;
  className?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const ComponentWrapper: FC<ComponentWrapperProps> = ({ children, className, ...props }) => (
  <div
    className={twMerge(
      "relative flex items-center pb-8 pl-10 pr-10 pt-8 text-body-main text-blue-1000 tabletS:pb-16 tabletS:pl-20 tabletS:pr-20 tabletS:pt-16 desktopM:pb-32 desktopM:pl-40 desktopM:pr-40 desktopM:pt-32",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);
