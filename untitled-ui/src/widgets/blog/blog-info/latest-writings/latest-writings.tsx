"use client";
import { ArrowRightIcon } from "@untitled/icons";
import { Button, InfoCard, Routes, Tag, TagDesignCode, useBlogsLogic, validateDate } from "@untitled/shared";
import { FC, useRef } from "react";
import { twJoin } from "tailwind-merge";

const listGap = 32;

const descriptionText = (authorFullName: string, publication: Date) => {
  const { day, shortMonth, year } = validateDate(publication)!;
  return `${authorFullName} • ${day} ${shortMonth} ${year}`;
};

export const LatestWritings: FC = () => {
  const { paginatedBlog } = useBlogsLogic({ maxItemsPerPage: "all" });

  const listRef = useRef<HTMLDivElement>(null);

  const prevPost = () => {
    const itemWidth =
      (listRef.current!.scrollWidth - listGap * (paginatedBlog.length - 1)) / paginatedBlog.length + listGap;

    listRef.current!.scrollBy({
      left: -itemWidth,
    });
  };

  const nextPost = () => {
    const itemWidth =
      (listRef.current!.scrollWidth - listGap * (paginatedBlog.length - 1)) / paginatedBlog.length + listGap;

    listRef.current!.scrollBy({
      left: itemWidth,
    });
  };

  return (
    <div className="mt-7 flex flex-col gap-8 overflow-hidden">
      <div
        ref={listRef}
        style={{ gap: listGap }}
        className="grid auto-cols-[calc((100%-32px*1)/1.2)] grid-flow-col overflow-x-auto scroll-smooth phoneM:auto-cols-[calc((100%-32px*1)/1.5)] tabletS:auto-cols-[calc((100%-32px*1)/2.5)] tabletSPlus:auto-cols-[calc((100%-32px*2)/3.5)]"
      >
        {paginatedBlog.map(({ fullName, publication, linkHref, tags, ...blog }, index) => (
          <InfoCard
            imageStyle={{
              width: "100%",
              height: "240",
            }}
            className="h-full bg-white-800"
            key={index}
            href={Routes.BLOG + linkHref}
            {...blog}
            description={descriptionText(fullName, publication)}
          >
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Tag key={index} className={twJoin(TagDesignCode[tag], "h-fit w-fit")} text={tag} />
              ))}
            </div>
          </InfoCard>
        ))}
      </div>
      <div className="flex gap-8">
        <Button
          onClick={prevPost}
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-[1px] border-gray-100"
        >
          <ArrowRightIcon className="rotate-180" fill="#667085" />
        </Button>
        <Button
          onClick={nextPost}
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-[1px] border-gray-100"
        >
          <ArrowRightIcon fill="#667085" />
        </Button>
      </div>
    </div>
  );
};
