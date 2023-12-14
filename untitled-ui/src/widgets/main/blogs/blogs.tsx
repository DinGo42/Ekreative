'use client';
import { FC } from 'react';
import { useBlogsLogic } from './blogs-logic';
import { BlogFilters } from './blog-filters';
import { BlogList } from './blogs-list';
import { Categories } from './types';

type BlogsProps = {
  maxItemsOnPage?: number;
};

export const Blogs: FC<BlogsProps> = ({ maxItemsOnPage = 1 }) => {
  const {
    blogs,
    currentPage,
    filter,
    selectedCategory,
    setCategory,
    setFilter,
    setPage,
    maxPages,
  } = useBlogsLogic({ maxItemsOnPage });
  return (
    <>
      <div className="flex flex-col gap-8">
        <BlogFilters
          filter={filter}
          setFilter={setFilter}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
          categories={Object.values(Categories)}
        />
        <BlogList
          maxPages={maxPages}
          currentPage={currentPage}
          list={blogs}
          maxItemsOnPage={maxItemsOnPage}
          setPage={setPage}
          visibleListRange={1}
        />
      </div>
    </>
  );
};
