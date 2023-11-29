'use client';
import { Card, Image, Link } from '@pr2/shared';
import { FC } from 'react';
import { Colors } from '../../../../../tailwind.config';

type BlogItemProps = {
  imageSrc: string;
  date: Date;
  title: string;
  description: string;
  linkHref: string;
};

export const BlogItem: FC<BlogItemProps> = ({
  date,
  description,
  imageSrc,
  linkHref,
  title,
}) => {
  return (
    <Card
      text={description}
      title={title}
      className="flex flex-col w-full h-full gap-10 p-0 bg-white-1000"
      date={date}
      titleClassName="text-xs"
      icon={
        <Image
          src={imageSrc}
          alt="blog-image-item"
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
        />
      }
    >
      <Link
        href={linkHref}
        arrowColor={Colors['blue-1000']}
        className="mt-8 text-lb-2"
      >
        Read more
      </Link>
    </Card>
  );
};
