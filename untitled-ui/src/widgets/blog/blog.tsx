"use client";
import { ChangeEvent, FC, useRef, useState } from "react";
import {
  Categories,
  useBlogsLogic,
  AuthorInfo,
  InfoCard,
  useDebounce,
  Routes,
  Input,
  InputStyleTypes,
} from "@untitled/shared";
import { PaginationWrapper } from "@untitled/shared/components/wrappers/pagination-wrapper";
import { BlogFilters } from "../main/blog/blog-filters";
import { WeeklyNewsletter } from "./weekly-newsletter";
import { SearchIcon } from "@untitled/icons";

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
  const [inputValue, setValue] = useState("");

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => setValue(target.value);

  useDebounce(() => {
    setSearchQuery(inputValue);
  }, 500);
  return (
    <>
      <Input
        wrapperClassName="self-center flex phoneM:w-[300px] items-center tabletS:mb-24 mb-16"
        ref={inputRef}
        type="email"
        styleType={InputStyleTypes.GRAY_ROUNDED}
        placeholder="Search"
        onChange={handleChange}
        className="py-[10px] pl-12"
      >
        <SearchIcon className="absolute left-[14px]" />
      </Input>
      <div className="flex flex-col gap-8 text-start tabletM:gap-16">
        <BlogFilters
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
          categories={Object.values(Categories)}
        />
        <PaginationWrapper totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}>
          {paginatedBlog.map(({ linkHref, category, avatarSrc, ...blog }, index) => (
            <>
              {selectedCategory === "View all" && index === 3 && currentPage === 1 && <WeeklyNewsletter key={index} />}
              <InfoCard
                imageStyle={{
                  width: "100%",
                  height: "240",
                }}
                key={index}
                href={Routes.BLOG + linkHref}
                {...blog}
                description={category}
              >
                <AuthorInfo {...blog} imageSrc={avatarSrc} />
              </InfoCard>
            </>
          ))}
        </PaginationWrapper>
      </div>
    </>
  );
};
