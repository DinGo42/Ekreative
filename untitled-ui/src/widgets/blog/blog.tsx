'use client';
import { ChangeEvent, FC, useRef, useState } from 'react';
import {
  Categories,
  useBlogsLogic,
  AuthorInfo,
  InfoCard,
  useDebounce,
  Button,
  ButtonStyleTypes,
} from '@untitled/shared';
import { PaginationWrapper } from '@untitled/shared/components/wrappers/pagination-wrapper';
import { BlogFilters } from '../main/blog/blog-filters';
import { WeeklyNewsletter } from './weekly-newsletter';
import { SearchIcon } from '@untitled/icons';

type BlogsProps = {
  maxItemsPerPage?: number;
};

export const BlogPosts: FC<BlogsProps> = ({ maxItemsPerPage = 8 }) => {
  const {
    currentPage,
    selectedCategory,
    paginatedBlog,
    dateFilter,
    setDateFilter,
    setCategory,
    setCurrentPage,
    totalPages,
    setSearchQuery,
  } = useBlogsLogic({ maxItemsPerPage });
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setValue] = useState('');

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setValue(target.value);

  useDebounce(() => {
    setSearchQuery(inputValue);
  }, 500);

  return (
    <>
      <div className="relative h-fit self-center flex w-full phoneM:w-[300px] items-center tabletS:mb-24 mb-16">
        <SearchIcon className="absolute left-[14px]" />
        <input
          ref={inputRef}
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          className="text-medium-regular outline-none border-[1.5px] w-full border-[#D0D5DD] rounded-lg py-[10px] pl-12"
        />
      </div>
      <div className="flex flex-col gap-8 tabletM:gap-16 text-start">
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
          {paginatedBlog.map(({ id, categoty, avatarSrc, ...blog }, index) =>
            selectedCategory === 'View all' &&
            index === 3 &&
            currentPage === 1 ? (
              <WeeklyNewsletter />
            ) : (
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
            )
          )}
        </PaginationWrapper>
      </div>
    </>
  );
};
