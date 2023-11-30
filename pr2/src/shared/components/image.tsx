'use client';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { CSSProperties, FC, ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

type ImageProps = {
  src: string;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
} & NextImageProps;

export const Image: FC<ImageProps> = ({
  src,
  style,
  className,
  fill = true,
  width,
  height,
  children,
  ...props
}) => (
  <div className={twJoin(className ? className : 'w-full h-full', 'relative')}>
    <NextImage
      src={src}
      {...props}
      loading="lazy"
      height={height}
      width={width}
      fill={width || height ? false : fill}
      style={style ? style : { objectFit: 'contain' }}
      quality={100}
    />
    {children}
  </div>
);
