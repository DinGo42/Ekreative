import { ComponentWrapper } from "@finsweet/shared";
import { BlogItem } from "./blog-item";
import { blogsPreview } from "./constants";
import { FC } from "react";

export const OurBlogBanner: FC = () => (
  <ComponentWrapper className="h-fit flex-col gap-12 pt-0">
    <span className="text-h2">Our Blog</span>
    <div className="tabletS:grid-cols-2 tabletM:grid-cols-3 grid h-fit w-full grid-cols-1 gap-x-8 gap-y-16">
      {blogsPreview.map((blog, index) => (
        <BlogItem {...blog} key={index} />
      ))}
    </div>
  </ComponentWrapper>
);
