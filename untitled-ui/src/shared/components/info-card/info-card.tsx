import { ArrowUpIcon } from '@untitled/icons';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { Image } from '../image';

type InfoCardProps = {
  imageSrc: string;
  imageAlt: string;
  name: string;
  title: string;
  text: string;
  href: string;
  children?: ReactNode;
};

export const InfoCard: FC<InfoCardProps> = ({
  children,
  href,
  imageSrc,
  imageAlt,
  name,
  text,
  title,
}) => (
  <div className="bg-white w-full h-fit flex flex-col gap-2">
    <Image
      alt={imageAlt}
      src={imageSrc}
      className="min-h-[240px] rounded-2xl mb-3"
      style={{ objectFit: 'cover' }}
    />
    <span className="text-small-semibold text-purple-800">{name}</span>
    <div className="flex">
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
