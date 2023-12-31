import { ComponentWrapper, Link, Image, validateDate } from '@finsweet/shared';
import { dailyMainBlog } from './constants';
import { FC } from 'react';

export const MainBlogBanner:FC = () => {
  const { author, date, description, imageSrc, title, imageAlt, linkHref } =
    dailyMainBlog;
  const { day, daySuffix, fullMonth, year } = validateDate(date);
  return (
    <ComponentWrapper className="flex-col gap-4 text-center">
      <span className="mb-4 text-xl tabletM:w-[70%]">{title}</span>
      <div className="flex text-lb-2 gap-1 mb-4">
        <span className="opacity-90">{author}</span>
        <span className="">
          Posted on {day + daySuffix + ' ' + fullMonth + ' ' + year}
        </span>
      </div>
      <Image
        alt={imageAlt}
        src={imageSrc}
        className="h-[480px] w-full mb-8"
        style={{ objectFit: 'cover' }}
      />
      <span className="opacity-70 tabletM:w-[65%]">{description}</span>
      <Link href={linkHref} className="text-blue-700">
        Read more
      </Link>
    </ComponentWrapper>
  );
};
