import { ArrowUpIcon } from '@untitled/icons';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { Image, ImageProps } from '../image';
import { twJoin, twMerge } from 'tailwind-merge';

export type InfoCardProps = {
  imageSrc: string;
  imageAlt: string;
  description: string | ReactNode;
  title: string;
  text: string;
  href: string;
  imageStyle?: ImageProps['style'];
  children?: ReactNode;
  ImageclassName?: string;
  className?: string;
  textSpacesClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  textClassName?: string;
};

export const InfoCard: FC<InfoCardProps> = ({
  children,
  href,
  imageSrc,
  imageAlt,
  description,
  text,
  title,
  imageStyle,
  ImageclassName,
  className,
  textSpacesClassName,
  descriptionClassName,
  textClassName,
  titleClassName = 'text-semibold',
}) => {
  console.log(href, 'href');
  return (
    <div
      className={twMerge(
        'bg-white w-full h-fit flex flex-col gap-2',
        className
      )}
    >
      <Image
        style={imageStyle}
        alt={imageAlt}
        src={imageSrc}
        className={twJoin('rounded-2xl mb-3', ImageclassName)}
      />
      <div className={twMerge('flex flex-col gap-2', textSpacesClassName)}>
        <div
          className={twJoin(
            descriptionClassName,
            'text-small-semibold text-purple-800'
          )}
        >
          {description}
        </div>
        <div className="flex justify-between">
          <span
            className={twMerge('text-semibold text-black-900', titleClassName)}
          >
            {title}
          </span>
          <Link href={href}>
            <ArrowUpIcon />
          </Link>
        </div>
        <span
          className={twJoin(
            textClassName,
            'text-medium-regular text-gray-600 mb-4 h-12 overflow-hidden text-ellipsis line-clamp-2'
          )}
        >
          {text}
        </span>
        {children}
      </div>
    </div>
  );
};
