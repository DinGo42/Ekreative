import { ComponentWrapper, Link, Image, validateDate } from '@pr2/shared';
import { dailyMainBlog } from './constants';

export const MainBlogBanner = () => {
  const { author, date, description, imageSrc, title, imageAlt, linkHref } =
    dailyMainBlog;
  const { day, daySuffix, fullMonth, year } = validateDate(date);
  return (
    <ComponentWrapper className="flex-col gap-4 text-center">
      <span className="mb-4 text-xl w-[60%]">{title}</span>
      <div className="flex text-lb-2 gap-1 mb-4">
        <span className="opacity-90">{author}</span>
        <span>Posted on {day + daySuffix + ' ' + fullMonth + ' ' + year}</span>
      </div>
      <Image
        alt={imageAlt}
        src={imageSrc}
        className="h-[480px] w-full mb-8"
        style={{ objectFit: 'cover' }}
      />
      <span className="opacity-70 w-[55%]">{description}</span>
      <Link href={linkHref} className="text-blue-700">
        Read more
      </Link>
    </ComponentWrapper>
  );
};
