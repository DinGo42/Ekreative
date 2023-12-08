'use client';
import { FC, useEffect, useState } from 'react';
import { blogsData } from '../data';
import { BlogCategories } from './categories';
import { DropDownDateFilter } from './drop-down-date-filter';
import {
  AuthorInfo,
  Button,
  ButtonStyleTypes,
  DropDown,
  InfoCard,
} from '@untitled/shared';
import { ArrowDownIcon, ArrowRightIcon, MenuIcon } from '@untitled/icons';
import { twMerge } from 'tailwind-merge';

export enum Categories {
  ALL = 'View all',
  DESIGN = 'Design',
  PRODUCT = 'Product',
  SOFTWARE_ENGINEERING = 'Software Engineering',
  CUSTOMER_SUCCESS = 'Customer Success',
}
export enum Filters {
  LATEST_BY_DATE = 'Most recent',
  OLDEST_BY_DATE = 'The oldest',
}

type BlogsProps = {
  maxItemsOnPage?: number;
};

export const Blogs: FC<BlogsProps> = ({ maxItemsOnPage = 1 }) => {
  const [selectedCategory, setCategory] = useState(Categories.ALL);
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
  const maxItemsInPagination =
    maxItemsOnPage > 9 ? 9 : maxItemsOnPage < 0 ? 1 : maxItemsOnPage;

  const firstItemIndexInPagination = (currentPage - 1) * maxItemsInPagination;
  const maxPages = Math.ceil(blogs.length / maxItemsOnPage);
  return (
    <>
      <div className="flex flex-col gap-8">
        <BlogCategories
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
        <DropDownDateFilter filter={filter} setFilter={setFilter} />

        <div className="flex flex-col gap-12">
          {blogs
            .splice(firstItemIndexInPagination, maxItemsInPagination)
            .map(
              (
                {
                  categoty,
                  fullname,
                  publication,
                  text,
                  title,
                  avatarAlt,
                  avatarBgColor,
                  avatarSrc,
                  imageSrc,
                },
                index
              ) => (
                <InfoCard
                  key={index}
                  href=""
                  imageAlt=""
                  imageSrc={imageSrc}
                  name={categoty}
                  text={text}
                  title={title}
                >
                  <AuthorInfo
                    fullname={fullname}
                    imageAlt={avatarAlt}
                    avatarBgColor={avatarBgColor}
                    imageSrc={avatarSrc}
                    publication={new Date(publication)}
                  />
                </InfoCard>
              )
            )}
          <div className="flex gap-3 items-center border-t-[1px] border-[#EAECF0] pt-4 phoneM:justify-between">
            <Button
              styleType={ButtonStyleTypes.ROUNDED_SQUARE}
              disabled={currentPage === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              <ArrowRightIcon className="rotate-180" />
              <span className="max-tabletS:hidden text-small-semibold text-gray-600">
                Previous
              </span>
            </Button>
            <span className="tabletS:hidden">
              Page {currentPage} of {maxPages < 1 ? 1 : maxPages}
            </span>
            <div className="max-tabletS:hidden gap-2 flex">
              <Button
                className="p-1 pl-3 pr-3 hover:bg-gray-blue-50 rounded-full"
                onClick={() => setPage(1)}
              >
                1
              </Button>
              <Button
                className="p-1 pl-3 pr-3 hover:bg-gray-blue-50 rounded-full"
                onClick={() => setPage(2)}
              >
                2
              </Button>
              <Button
                className="p-1 pl-3 pr-3 hover:bg-gray-blue-50 rounded-full"
                onClick={() => setPage(3)}
              >
                3
              </Button>
              <span className={twMerge(maxPages < 6 && 'hidden')}>...</span>
              <Button
                className="p-1 pl-3 pr-3 hover:bg-gray-blue-50 rounded-full"
                onClick={() => setPage(maxPages - 2)}
              >
                {maxPages - 2}
              </Button>
              <Button
                className="p-1 pl-3 pr-3 hover:bg-gray-blue-50 rounded-full"
                onClick={() => setPage(maxPages - 1)}
              >
                {maxPages - 1}
              </Button>
              <Button
                className="p-1 pl-3 pr-3 hover:bg-gray-blue-50 rounded-full"
                onClick={() => setPage(maxPages)}
              >
                {maxPages}
              </Button>
            </div>
            <Button
              styleType={ButtonStyleTypes.ROUNDED_SQUARE}
              disabled={currentPage === maxPages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              <span className="max-tabletS:hidden text-small-semibold text-gray-600">
                Next
              </span>
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
