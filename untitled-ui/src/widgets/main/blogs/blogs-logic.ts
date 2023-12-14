'use client';
import { useState, useEffect } from 'react';
import { blogsData } from '../data';
import { Categories, type CategoriesValues, Filters } from './types';

type BlogsLogicProps = {
  maxItemsOnPage: number;
};

export const useBlogsLogic = ({ maxItemsOnPage }: BlogsLogicProps) => {
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

  const blogList = blogs.splice(
    (currentPage - 1) * maxItemsOnPage,
    maxItemsOnPage
  );

  const maxPages = Math.ceil(blogs.length / maxItemsOnPage);

  return {
    selectedCategory,
    setCategory,
    maxPages,
    blogs: blogList,
    filter,
    setFilter,
    currentPage,
    setPage,
  };
};
