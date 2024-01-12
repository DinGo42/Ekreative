'use client';
import { ArrowRightIcon } from '@untitled/icons';
import {
  Button,
  InfoCard,
  Routes,
  Tag,
  TagDesignCode,
  useBlogsLogic,
  validateDate,
} from '@untitled/shared';
import { FC, useRef } from 'react';
import { twJoin } from 'tailwind-merge';

const listGap = 32;

const descriptionText = (authorFullName: string, publication: Date) => {
  const { day, shortMonth, year } = validateDate(publication)!;
  return `${authorFullName} • ${day} ${shortMonth} ${year}`;
};

export const LatestWritings: FC = () => {
  const { paginatedBlog } = useBlogsLogic({ maxItemsPerPage: 'all' });

  const listRef = useRef<HTMLDivElement>(null);

  const prevPost = () => {
    const itemWidth =
      (listRef.current!.scrollWidth - listGap * (paginatedBlog.length - 1)) /
        paginatedBlog.length +
      listGap;

    listRef.current!.scrollBy({
      left: -itemWidth,
    });
  };

  const nextPost = () => {
    const itemWidth =
      (listRef.current!.scrollWidth - listGap * (paginatedBlog.length - 1)) /
        paginatedBlog.length +
      listGap;

    listRef.current!.scrollBy({
      left: itemWidth,
    });
  };

  return (
    <div className="flex flex-col overflow-hidden gap-8 mt-7">
      <div
        ref={listRef}
        style={{ gap: listGap }}
        className="grid grid-flow-col tabletSPlus:auto-cols-[calc((100%-32px*2)/3.5)] tabletS:auto-cols-[calc((100%-32px*1)/2.5)] phoneM:auto-cols-[calc((100%-32px*1)/1.5)] auto-cols-[calc((100%-32px*1)/1.2)] overflow-x-auto scroll-smooth"
      >
        {paginatedBlog.map(
          ({ fullName, publication, linkHref, tags, ...blog }, index) => (
            <InfoCard
              imageStyle={{
                width: '100%',
                height: '240',
              }}
              className="bg-white-800 h-full"
              key={index}
              href={Routes.BLOG + linkHref}
              {...blog}
              description={descriptionText(fullName, publication)}
            >
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag, index) => (
                  <Tag
                    key={index}
                    className={twJoin(TagDesignCode[tag], 'w-fit h-fit')}
                    text={tag}
                  />
                ))}
              </div>
            </InfoCard>
          )
        )}
      </div>
      <div className="flex gap-8">
        <Button
          onClick={prevPost}
          className="w-[56px] h-[56px] rounded-full border-[1px] border-gray-100 items-center justify-center flex"
        >
          <ArrowRightIcon className="rotate-180" fill="#667085" />
        </Button>
        <Button
          onClick={nextPost}
          className="w-[56px] h-[56px] rounded-full border-[1px] border-gray-100 items-center justify-center flex"
        >
          <ArrowRightIcon fill="#667085" />
        </Button>
      </div>
    </div>
  );
};
