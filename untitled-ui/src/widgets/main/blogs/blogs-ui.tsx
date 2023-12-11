'use client';
import { useState, useEffect, FC } from 'react';
import { blogsData } from '../data';
import { BlogList } from './blogs-list';
import { BlogFilters } from './blog-filters';
import { Categories, type CategoriesValues, Filters } from './types';

type BlogsUIProps = {
  maxItemsOnPage: number;
};

export const BlogsUI: FC<BlogsUIProps> = ({ maxItemsOnPage }) => {
  const [selectedCategory, setCategory] = useState<CategoriesValues>(
    Categories.ALL
  );
  const [filter, setFilter] = useState(Filters.LATEST_BY_DATE);
  const [currentPage, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  const filteredByCategory = blogsData.filter(({ categoty }) =>
    selectedCategory === Categories.ALL ? true : categoty === selectedCategory
  );
  const sortedByDate = filteredByCategory.sort((a, b) => {
    const dateA = new Date(a.publication).getTime();
    const dateB = new Date(b.publication).getTime();

    return dateA - dateB;
  });

  const blogs =
    filter === Filters.LATEST_BY_DATE ? sortedByDate : sortedByDate.reverse();
  return (
    <>
      <BlogFilters
        filter={filter}
        setFilter={setFilter}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
        categories={Object.values(Categories)}
      />
      <BlogList
        currentPage={currentPage}
        list={blogs}
        maxItemsOnPage={maxItemsOnPage}
        setPage={setPage}
        visibleListRange={1}
      />
    </>
  );
};
