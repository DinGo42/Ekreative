import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { Button, ButtonStyleTypes, generatePageIndexes } from "@untitled/shared";
import { ArrowRightIcon } from "@untitled/icons";
import { twMerge } from "tailwind-merge";

type PaginationWrapperProps = {
  currentPage: number;
  totalPages: number;
  visibleListRange?: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  children: ReactNode;
  numberOfRecentPages?: number;
  className?: string;
  paginationControlsClassName?: string;
  contentClassName?: string;
};

export const PaginationWrapper: FC<PaginationWrapperProps> = ({
  children,
  currentPage,
  setCurrentPage,
  totalPages,
  visibleListRange = 1,
  numberOfRecentPages = 3,
  contentClassName = "tabletS:grid-cols-2 tabletM:grid-cols-3",
  paginationControlsClassName,
  className,
}) => {
  const pagesIndexes = generatePageIndexes(currentPage, totalPages, numberOfRecentPages, visibleListRange);
  return (
    <>
      <div className={twMerge("flex flex-col gap-12", className)}>
        <div className={twMerge("grid grid-cols-1 gap-x-8 gap-y-12", contentClassName)}>{children}</div>
        <div
          className={twMerge(
            "phoneM:justify-between flex items-center gap-3 border-t-[1px] border-gray-100 pt-4",
            paginationControlsClassName,
          )}
        >
          <Button
            styleType={ButtonStyleTypes.ROUNDED_SQUARE}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            <ArrowRightIcon className="rotate-180" />
            <span className="text-small-semibold max-tabletS:hidden text-gray-600">Previous</span>
          </Button>
          <span className="tabletS:hidden">
            Page {currentPage} of {totalPages < 1 ? 1 : totalPages}
          </span>
          <div className="max-tabletS:hidden flex gap-2">
            {pagesIndexes.map((pageIndex, index) => {
              return (
                <Button
                  key={index}
                  className={twMerge(
                    "hover:bg-gray-blue-50 rounded-full p-1 pl-3 pr-3",
                    currentPage === pageIndex && "bg-gray-100",
                  )}
                  onClick={() => setCurrentPage(pageIndex)}
                >
                  {pageIndex}
                </Button>
              );
            })}
          </div>
          <Button
            styleType={ButtonStyleTypes.ROUNDED_SQUARE}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            <span className="text-small-semibold max-tabletS:hidden text-gray-600">Next</span>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </>
  );
};
