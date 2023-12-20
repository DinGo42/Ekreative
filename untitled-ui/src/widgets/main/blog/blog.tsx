'use client';
import { FC } from 'react';
import { BlogFilters } from './blog-filters';
import {
  Categories,
  useBlogsLogic,
  AuthorInfo,
  InfoCard,
} from '@untitled/shared';
import { PaginationWrapper } from '@untitled/shared/components/wrappers/pagination-wrapper';

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
        <PaginationWrapper
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        >
          {paginatedBlog.map(({ id, categoty, avatarSrc, ...blog }, index) => (
            <InfoCard
              imageStyle={{
                width: '100%',
                height: '240',
              }}
              key={index}
              href={id}
              {...blog}
              description={categoty}
            >
              <AuthorInfo {...blog} imageSrc={avatarSrc} />
            </InfoCard>
          ))}
        </PaginationWrapper>
      </div>
    </>
  );
};
