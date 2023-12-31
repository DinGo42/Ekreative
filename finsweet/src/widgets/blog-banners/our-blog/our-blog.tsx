import { ComponentWrapper } from '@finsweet/shared';
import { BlogItem } from './blog-item';
import { blogsPrview } from './constants';
import { FC } from 'react';

export const OurBlogBanner:FC = () => (
  <ComponentWrapper className="pt-0 flex-col gap-12 h-fit">
    <span className="text-xl">Our Blog</span>
    <div className="grid tabletM:grid-cols-3 tabletS:grid-cols-2 grid-cols-1 w-full h-fit gap-x-8 gap-y-16">
      {blogsPrview.map((blog, index) => (
        <BlogItem {...blog} key={index} />
      ))}
    </div>
  </ComponentWrapper>
);
