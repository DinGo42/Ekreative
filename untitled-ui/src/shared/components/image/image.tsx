import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

import { FC, ReactNode } from 'react';

type ImageProps = {
  children?: ReactNode;
  className?: string;
  sizes?: string;
} & NextImageProps;

export const Image: FC<ImageProps> = ({
  children,
  className,
  sizes = '100vw',
  ...props
}) => (
  <div className={twMerge('w-full h-fit relative overflow-hidden', className)}>
    <NextImage
      sizes={sizes}
      fill={true}
      style={{ objectFit: 'contain' }}
      {...props}
    />
    {children}
  </div>
);
