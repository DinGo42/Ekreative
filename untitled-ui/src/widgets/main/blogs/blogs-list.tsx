import { Dispatch, FC, SetStateAction } from 'react';
import { blogsDataType } from '../data';
import {
  InfoCard,
  AuthorInfo,
  Button,
  ButtonStyleTypes,
} from '@untitled/shared';
import { generatePageIndexes } from './generate-visible-page-indexes';
import { ArrowRightIcon } from '@untitled/icons';
import { twMerge } from 'tailwind-merge';

type BlogListProps = {
  list: blogsDataType[];
  currentPage: number;
  maxItemsOnPage: number;
  visibleListRange: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const BlogList: FC<BlogListProps> = ({
  list,
  currentPage,
  maxItemsOnPage,
  setPage,
  visibleListRange,
}) => {
  const maxPages = Math.ceil(list.length / maxItemsOnPage);

  const [firstPagesIndex, lastPagesIndex] = generatePageIndexes(
    currentPage,
    maxPages,
    visibleListRange
  );
  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1  tabletS:grid-cols-2 tabletM:grid-cols-3 gap-12">
          {list
            .splice((currentPage - 1) * maxItemsOnPage, maxItemsOnPage)
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
                  id,
                  imageAlt,
                },
                index
              ) => (
                <InfoCard
                  key={index}
                  href={id}
                  imageAlt={imageAlt}
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
        </div>
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
            {firstPagesIndex.map((pageIndex, index) => (
              <Button
                key={index}
                className={twMerge(
                  'p-1 pl-3 pr-3 hover:bg-gray-blue-50 rounded-full',
                  currentPage === pageIndex && 'bg-purple-200'
                )}
                onClick={() => setPage(pageIndex)}
              >
                {pageIndex}
              </Button>
            ))}
            <span
              className={twMerge(
                maxPages < currentPage + visibleListRange * 4 + 1 ||
                  currentPage + visibleListRange >
                    maxPages - visibleListRange * 2 + 1
                  ? 'hidden'
                  : ''
              )}
            >
              ...
            </span>
            {lastPagesIndex.map((pageIndex, index) => (
              <Button
                key={index}
                className={twMerge(
                  'p-1 pl-3 pr-3 hover:bg-gray-blue-50 rounded-full',
                  currentPage === pageIndex && 'bg-purple-200'
                )}
                onClick={() => setPage(pageIndex)}
              >
                {pageIndex}
              </Button>
            ))}
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
    </>
  );
};
