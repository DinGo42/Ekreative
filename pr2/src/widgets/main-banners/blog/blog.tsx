import { ComponentWrapper } from '@pr2/shared';
import { BlogItem } from './blog-item';
import { blogs } from './constants';

export const BlogBanner = () => (
  <ComponentWrapper className="w-full h-fit flex-col gap-16 items-start pt-0">
    <span className="text-xl">Our blog</span>
    <div className="w-full grid grid-flow-row tabletM:grid-cols-3 tabletS_Plus:grid-cols-2 grid-cols-1 h-full gap-8">
      {blogs.map((blog, index) => (
        <BlogItem {...blog} key={index} />
      ))}
    </div>
  </ComponentWrapper>
);
