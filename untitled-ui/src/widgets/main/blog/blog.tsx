"use client";
import { FC } from "react";
import { BlogFilters } from "./blog-filters";
import { Categories, useBlogsLogic, AuthorInfo, InfoCard, Routes, PaginationWrapper } from "@untitled/shared";

type BlogsProps = {
  maxItemsPerPage?: number;
};

export const Blog: FC<BlogsProps> = ({ maxItemsPerPage = 6 }) => {
  const {
    paginatedBlog,
    currentPage,
    dateFilter,
    selectedCategory,
    setCategory,
    setDateFilter,
    setCurrentPage,
    totalPages,
  } = useBlogsLogic({ maxItemsPerPage });
  return (
    <>
      <div className="flex flex-col gap-8 tabletM:gap-16">
        <BlogFilters
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
          categories={Object.values(Categories)}
        />
        <PaginationWrapper totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}>
          {paginatedBlog.map(({ linkHref, category, avatarSrc, ...blog }, index) => (
            <InfoCard
              imageStyle={{
                width: "100%",
                height: "240",
              }}
              key={index}
              href={Routes.BLOG + linkHref}
              {...blog}
              description={category}
            >
              <AuthorInfo {...blog} imageSrc={avatarSrc} />
            </InfoCard>
          ))}
        </PaginationWrapper>
      </div>
    </>
  );
};
