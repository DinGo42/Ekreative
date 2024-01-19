"use client";
import { PaginationWrapper, InfoCard, Routes, useBlogsLogic, validateDate, TagDesignCode, Tag } from "@untitled/shared";
import { FC } from "react";

type OtherBlogsProps = {
  maxItemsPerPage?: number;
  currentBlogId: string;
};
const descriptionText = (authorFullName: string, publication: Date) => {
  const { day, shortMonth, year } = validateDate(publication)!;
  return `${authorFullName} • ${day} ${shortMonth} ${year}`;
};

export const OtherBlogs: FC<OtherBlogsProps> = ({ maxItemsPerPage = 6, currentBlogId }) => {
  const { paginatedBlog, currentPage, setCurrentPage, totalPages } = useBlogsLogic({ maxItemsPerPage });

  return (
    <PaginationWrapper totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {paginatedBlog
        .filter(({ id }) => currentBlogId !== id)
        .map(({ linkHref, fullName, publication, tags, ...blog }, index) => (
          <InfoCard
            imageStyle={{
              width: "100%",
              height: "240",
            }}
            key={index}
            href={Routes.BLOG + linkHref}
            {...blog}
            description={descriptionText(fullName, publication)}
          >
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <Tag key={index} className={TagDesignCode[tag]} text={tag} />
              ))}
            </div>
          </InfoCard>
        ))}
    </PaginationWrapper>
  );
};
