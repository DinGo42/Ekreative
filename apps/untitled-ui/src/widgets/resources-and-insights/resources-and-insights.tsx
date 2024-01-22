"use client";
import { FC } from "react";
import { useBlogsLogic, AuthorInfo, InfoCard, calculateReadingTime, Routes, PaginationWrapper } from "@untitled/shared";
import { Categories } from "./categories";
import { twJoin } from "tailwind-merge";

type BlogsProps = {
  maxItemsPerPage?: number;
};

const CardDescription = ({ category, text }: { category: string; text: string }) => (
  <div
    className={
      "flex w-fit items-center justify-center gap-2 rounded-full border-[1px]  border-purple-200 bg-purple-50 p-1 px-2 py-[2xp] text-purple-800"
    }
  >
    <div className={"w-fit rounded-full border-[1px] border-purple-200 bg-white px-2 py-[2xp] text-purple-800"}>
      {category}
    </div>
    <span>{calculateReadingTime(text) + "  min read"}</span>
  </div>
);

export const BlogCatalog: FC<BlogsProps> = ({ maxItemsPerPage = 6 }) => {
  const { paginatedBlog, currentPage, selectedCategory, setCategory, setCurrentPage, totalPages, setSearchQuery } =
    useBlogsLogic({ maxItemsPerPage });
  return (
    <>
      <div className="max-tabletS:flex-col tabletM:gap-16 relative flex gap-8">
        <Categories setSearchQuery={setSearchQuery} selectedCategory={selectedCategory} setCategory={setCategory} />
        <div className="flex h-fit flex-col gap-12">
          {currentPage === 1 &&
            selectedCategory === "View all" &&
            paginatedBlog.splice(0, 1).map(({ linkHref, category, avatarSrc, text, ...blog }, index) => (
              <InfoCard
                imageStyle={{
                  width: "100%",
                  height: "100%",
                }}
                className="tabletM:flex-row gap-8"
                key={index}
                href={Routes.BLOG + linkHref}
                text={text}
                {...blog}
                ImageClassName="max-h-[320px]"
                textSpacesClassName="gap-3 tabletM:w-1/2 h-fit"
                titleClassName="mt-1 text-medium-semibold-main"
                textClassName="mb-3 line-clamp-none overflow-visible h-fit"
                description={<CardDescription category={category} text={text} />}
              >
                <AuthorInfo {...blog} imageSrc={avatarSrc} />
              </InfoCard>
            ))}

          <PaginationWrapper
            contentClassName={twJoin(
              "tabletS:grid-cols-2 tabletM:grid-cols-2",
              paginatedBlog.length < 2 && "tabletS:grid-cols-1",
            )}
            className="pb-[97px]"
            paginationControlsClassName="absolute bottom-0 w-full left-0"
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          >
            {paginatedBlog.map(({ linkHref, category, avatarSrc, text, ...blog }, index) => (
              <InfoCard
                imageStyle={{
                  width: "100%",
                  height: "240",
                }}
                key={index}
                href={Routes.BLOG + linkHref}
                text={text}
                {...blog}
                description={<CardDescription category={category} text={text} />}
              >
                <AuthorInfo {...blog} imageSrc={avatarSrc} />
              </InfoCard>
            ))}
          </PaginationWrapper>
        </div>
      </div>
    </>
  );
};
