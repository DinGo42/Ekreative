import { ComponentWrapper } from '@pr2/shared';
import { BlogItem } from './blog-item';
import { blogs } from './constants';

export const BlogBanner = () => (
  <ComponentWrapper className="w-full h-visible-screen flex-col gap-16 items-start pt-0">
    <span className="text-xl">Our blog</span>
    <div className="w-full grid grid-flow-col grid-cols-3 h-full gap-8">
      {blogs.map((blog, index) => (
        <BlogItem {...blog} key={index} />
      ))}
    </div>
  </ComponentWrapper>
);
