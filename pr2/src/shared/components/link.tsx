'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { ArrowIcon } from '../../../public';
import { LinkStyleTypes } from '../constants';

type LinkProps = {
  children: ReactNode;
  href: string;
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
