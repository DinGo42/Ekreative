'use client';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC, ReactNode } from 'react';

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  id?: string;
} & NextLinkProps;

export const Link: FC<LinkProps> = ({
  href,
  children,
  className,
  id,
  ...props
}) => {
  return (
    <NextLink id={id} href={href} className={className} {...props}>
      {children}
    </NextLink>
  );
};
