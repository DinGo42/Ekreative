import { ComponentWrapper } from '@pr2/shared';
import { BlogItem } from './blog-item';
import { blogsPrview } from './constants';

export const OurBlogBanner = () => (
  <ComponentWrapper className="pt-0 flex-col gap-12 h-fit">
    <span className="text-xl">Our Blog</span>
    <div className="grid grid-cols-3 w-full h-fit gap-x-8 gap-y-16">
      {blogsPrview.map((blog, index) => (
        <BlogItem {...blog} key={index} />
      ))}
    </div>
  </ComponentWrapper>
);
