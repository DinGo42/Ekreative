import { ArrowUpIcon } from '@untitled/icons';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { Image, ImageProps } from '../image';
import { twMerge } from 'tailwind-merge';

type InfoCardProps = {
  imageSrc: string;
  imageAlt: string;
  name: string;
  title: string;
  text: string;
  href: string;
  imageStyle?: ImageProps['style'];
  children?: ReactNode;
  className?: string;
};

export const InfoCard: FC<InfoCardProps> = ({
  children,
  href,
  imageSrc,
  imageAlt,
  name,
  text,
  title,
  imageStyle,
  className,
}) => (
  <div className="bg-white w-full h-fit flex flex-col gap-2">
    <Image
      style={imageStyle}
      alt={imageAlt}
      src={imageSrc}
      className={twMerge('rounded-2xl mb-3', className)}
    />
    <span className="text-small-semibold text-purple-800">{name}</span>
    <div className="flex justify-between">
      <span className="text-semibold text-black-900">{title}</span>
      <Link href={href}>
        <ArrowUpIcon />
      </Link>
    </div>
    <span className="text-medium-regular text-gray-600 mb-4 h-12 overflow-hidden text-ellipsis line-clamp-2">
      {text}
    </span>
    {children}
  </div>
);
