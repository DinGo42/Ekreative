'use client';
import { Card, Image, Link, Routs } from '@pr2/shared';
import { Colors } from '@pr2/tailwindConfig';
import { FC } from 'react';

export type BlogItemProps = {
  imageSrc: string;
  date: Date;
  title: string;
  description: string;
  linkHref: Routs.BLOG;
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
      className="flex flex-col w-full h-full gap-8 p-0 bg-white-1000"
      date={date}
      textSpaceCassName="gap-4 mt-2"
      dateClassName="opacity-70"
      titleClassName="text-xs"
      icon={
        <Image
          src={imageSrc}
          alt="blog-image-item"
          style={{ objectFit: 'cover' }}
          className="w-full h-72"
        />
      }
    >
      <Link
        href={linkHref}
        arrowColor={Colors['blue-1000']}
        className="text-lb-2"
      >
        Read more
      </Link>
    </Card>
  );
};
