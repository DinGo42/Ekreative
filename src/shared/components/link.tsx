'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { ArrowIcon } from '../../../public';

export enum LinksStyleTypes {
  MAIN_ROUNDED = 'p-3 pl-9 pr-9 bg-yellow-90 rounded-4xl text-lb-1 text-[#1B1C2A] hover:text-[#1B1C2B] hover:bg-[#FDE4A6]',
  SECONDARY_ROUNDED = 'p-3 pl-9 pr-9 bg-blue-1000 rounded-4xl text-lb-1 text-white-1000 hover:bg-[#535460]',
  MAIN = 'text-bs-2 hover:text-white-1000 text-blue-350 transition-colors',
  SECONDARY = 'text-bs-2 hover:text-blue-350',
  NONE = '',
}
type LinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  arrowColor?: string;
  styleType?: LinksStyleTypes;
} & NextLinkProps;

export const Link: FC<LinkProps> = ({
  href,
  className,
  children,
  arrowColor,
  styleType = LinksStyleTypes.NONE,
  ...props
}) => (
  <NextLink
    href={href}
    className={twMerge(
      className,
      styleType,
      'w-fit h-fit flex gap-4 items-center transition-colors'
    )}
    {...props}
  >
    {children}
    {arrowColor && <ArrowIcon fill={arrowColor} />}
  </NextLink>
);
