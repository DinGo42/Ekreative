import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import {
  Button,
  ButtonStyleTypes,
  generatePageIndexes,
} from '@untitled/shared';
import { ArrowRightIcon } from '@untitled/icons';
import { twMerge } from 'tailwind-merge';

type PaginationWrapperProps = {
  currentPage: number;
  totalPages: number;
  visibleListRange?: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  children: ReactNode;
  numberOfRecentPages?: number;
};

export const PaginationWrapper: FC<PaginationWrapperProps> = ({
  children,
  currentPage,
  setCurrentPage,
  totalPages,
  visibleListRange = 1,
  numberOfRecentPages = 3,
}) => {
  const pagesIndxes = generatePageIndexes(
    currentPage,
    totalPages,
    numberOfRecentPages,
    visibleListRange
  );
  return (
    <>
      <div className="flex flex-col gap-12 tabletM:gap-16 mb-16 tabletS:mb-24">
        <div className="grid grid-cols-1  tabletS:grid-cols-2 tabletM:grid-cols-3 gap-y-12 gap-x-8">
          {children}
        </div>
        <div className="flex gap-3 items-center border-t-[1px] border-[#EAECF0] tabletM:pb-24 pb-16 pt-4 phoneM:justify-between">
          <Button
            styleType={ButtonStyleTypes.ROUNDED_SQUARE}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <ArrowRightIcon className="rotate-180" />
            <span className="max-tabletS:hidden text-small-semibold text-gray-600">
              Previous
            </span>
          </Button>
          <span className="tabletS:hidden">
            Page {currentPage} of {totalPages < 1 ? 1 : totalPages}
          </span>
          <div className="max-tabletS:hidden gap-2 flex">
            {pagesIndxes.map((pageIndex, index) => {
              return (
                <>
                  <Button
                    key={index}
                    className={twMerge(
                      'p-1 pl-3 pr-3 hover:bg-gray-blue-50 rounded-full',
                      currentPage === pageIndex && 'bg-purple-200'
                    )}
                    onClick={() => setCurrentPage(pageIndex)}
                  >
                    {pageIndex}
                  </Button>
                </>
              );
            })}
          </div>
          <Button
            styleType={ButtonStyleTypes.ROUNDED_SQUARE}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
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

{
  /* <span
              className={twMerge(
                totalPages < currentPage + visibleListRange * 4 + 1 ||
                  currentPage + visibleListRange >
                    totalPages - visibleListRange * 2 + 1
                  ? 'hidden'
                  : ''
              )}
            >
              ...
            </span> */
}
