'use client';
import { useState, useEffect } from 'react';
import {
  CategoriesValues,
  Categories,
  SortOptions,
  blogData,
  Blog,
} from '../apis';

type BlogLogicProps = {
  maxItemsPerPage: number | 'all';
  initialSelectedCategory?: CategoriesValues;
  initialSelectedDateFilter?: SortOptions;
  sortByField?: keyof Omit<Blog, 'publication' | 'tags'>;
};

const containsWord = (string: string, word: string) =>
  new RegExp(`${string}`, 'gi').test(word);

const sortOptions: Record<
  SortOptions,
  (arr: Blog[], sortField?: keyof Omit<Blog, 'publication' | 'tags'>) => Blog[]
> = {
  [SortOptions.BY_ALPHABET]: (
    arr: Blog[],
    sortField?: keyof Omit<Blog, 'publication' | 'tags'>
  ) =>
    sortField
      ? arr.sort((a, b) => a[sortField].localeCompare(String(b[sortField])))
      : arr,

  [SortOptions.OLDEST_BY_DATE]: (arr: Blog[]) =>
    arr.sort(
      (a, b) =>
        new Date(a.publication).getTime() - new Date(b.publication).getTime()
    ),
  [SortOptions.RECENT_BY_DATE]: (arr: Blog[]) =>
    arr.sort(
      (a, b) =>
        new Date(b.publication).getTime() - new Date(a.publication).getTime()
    ),
};

const sortArray = ({
  arr,
  sortType,
  sortField,
}: {
  arr: Blog[];
  sortType: SortOptions;
  sortField: keyof Omit<Blog, 'publication' | 'tags'>;
}) => {
  if (sortType === SortOptions.BY_ALPHABET)
    return sortOptions[sortType](arr, sortField);

  return sortOptions[sortType](arr);
};

export const useBlogsLogic = ({
  maxItemsPerPage,
  initialSelectedCategory = Categories.ALL,
  initialSelectedDateFilter = SortOptions.RECENT_BY_DATE,
  sortByField = 'title',
}: BlogLogicProps) => {
  const [selectedCategory, setCategory] = useState<CategoriesValues>(
    initialSelectedCategory
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState(initialSelectedDateFilter);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage =
    maxItemsPerPage === 'all' ? blogData.length : maxItemsPerPage;
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredByCategory = blogData.filter(({ category }) =>
    selectedCategory === Categories.ALL ? true : category === selectedCategory
  );

  const filteredBlog = sortArray({
    arr: [...filteredByCategory],
    sortType: dateFilter,
    sortField: sortByField,
  }).filter(({ title }) => containsWord(searchQuery, title));

  const totalPages = Math.ceil(filteredBlog.length / itemsPerPage);

  return {
    selectedCategory,
    setCategory,
    totalPages,
    paginatedBlog: filteredBlog.splice(
      (currentPage - 1) * itemsPerPage,
      itemsPerPage
    ),
    dateFilter,
    setDateFilter,
    currentPage,
    setCurrentPage,
    setSearchQuery,
  };
};
