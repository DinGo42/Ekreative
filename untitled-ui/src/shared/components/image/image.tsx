import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

import { FC, ReactNode } from 'react';

export type ImageProps = {
  children?: ReactNode;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
  style?: NextImageProps['style'];
} & NextImageProps;

export const Image: FC<ImageProps> = ({
  children,
  className,
  sizes = '50vw, 33vw',
  width = 0,
  height = 0,
  fill,
  style = { width: '100%', height: 'auto' },
  ...props
}) => (
  <div className={twMerge('w-full h-fit relative overflow-hidden', className)}>
    <NextImage
      sizes={sizes}
      width={width}
      height={height}
      style={style}
      {...props}
    />
    {children}
  </div>
);
