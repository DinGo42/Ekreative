import { FC } from 'react';
import { BlogsUI } from './blogs-ui';
type BlogsProps = {
  maxItemsOnPage?: number;
};

export const Blogs: FC<BlogsProps> = ({ maxItemsOnPage = 3 }) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <BlogsUI maxItemsOnPage={maxItemsOnPage} />
      </div>
    </>
  );
};
