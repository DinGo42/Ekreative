import { Routes } from '@untitled/shared';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC, ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

export enum LinkStyleTypes {
  SEMIBOLD_GRAY = 'text-medium-semibold-secondary text-gray-600',
  NONE = '',
}

type LinkProps = {
  children: ReactNode;
  href: string | Routes;
  styleType?: LinkStyleTypes;
  className?: string;
} & NextLinkProps;

export const Link: FC<LinkProps> = ({
  href,
  styleType,
  className,
  children,
  ...props
}) => (
  <NextLink href={href} {...props} className={twJoin(styleType, className)}>
    {children}
  </NextLink>
);
