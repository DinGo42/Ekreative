import { ArrowUpIcon } from '@untitled/icons';
import { FC } from 'react';
import { Image } from '../image';
import { twMerge } from 'tailwind-merge';
import { AuthorInfo, Link, validateDate } from '@untitled/shared';

type LargeInfoCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  href: string;
  tags: string[];
  className?: string;
  publication: Date;
  authorSrc: string;
  authorAlt: string;
  authorFullName: string;
};

export const LargeInfoCard: FC<LargeInfoCardProps> = ({
  href,
  imageSrc,
  imageAlt,
  tags,
  text,
  title,
  className,
  publication,
  authorSrc,
  authorAlt,
  authorFullName,
}) => {
  const { day, fullMonth, year } = validateDate(publication)!;

  return (
    <div
      className={twMerge(
        'w-full flex flex-col gap-2 relative max-h-[720px] text-white',
        className
      )}
    >
      <Image
        style={{ width: '100%', height: '100%' }}
        alt={imageAlt}
        src={imageSrc}
        className={'rounded-2xl -z-50'}
      />
      <div className="absolute bottom-0 w-full p-8 flex flex-col gap-2 justify-end">
        <div className="flex justify-between">
          <span className="text-main-semibold max-tabletSPlus:w-1/2">
            {title}
          </span>
          <Link href={href}>
            <ArrowUpIcon stroke="white" />
          </Link>
        </div>
        <span className="text-small-main max-tabletSPlus:w-5/6">{text}</span>
        <div className="flex gap-8 items-start mt-4 justify-between relative">
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-small-semibold">Written by</span>
              <AuthorInfo
                imageAlt={authorAlt}
                imageSrc={authorSrc}
                avatarBgColor="#ffffff"
                className="gap-3 justify-center"
                fullName={authorFullName}
                textSpaceClassName={'text-white'}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-small-semibold">Published on</span>
              <span className="text-medium-semibold-secondary py-2">
                {day + ' ' + fullMonth + ' ' + year}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between absolute h-full right-0">
            <span className="text-small-semibold">File under</span>
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="border-[1.5px] rounded-full border-white px-2 text-small-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
