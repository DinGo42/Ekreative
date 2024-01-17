"use client";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactNode, FC } from "react";
import { twMerge } from "tailwind-merge";
import { LinkStyleTypes, Routs } from "../../constants";
import { ArrowIcon } from "@finsweet/icons";

type LinkProps = {
  children: ReactNode;
  href: string | Routs;
  className?: string;
  arrowColor?: string;
  styleType?: LinkStyleTypes;
} & NextLinkProps;

export const Link: FC<LinkProps> = ({
  href,
  className,
  children,
  arrowColor,
  styleType = LinkStyleTypes.NONE,
  ...props
}) => (
  <NextLink
    href={href}
    className={twMerge(className, styleType, "flex h-fit w-fit items-center gap-4 transition-colors")}
    {...props}
  >
    {children}
    {arrowColor && <ArrowIcon fill={arrowColor} />}
  </NextLink>
);
