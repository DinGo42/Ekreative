import { ComponentWrapper } from "@finsweet/shared";
import { BlogItem } from "./blog-item";
import { blogs } from "./constants";
import { FC } from "react";

export const BlogBanner: FC = () => (
  <ComponentWrapper className="h-fit w-full flex-col items-start gap-16 pt-0">
    <span className="text-h2">Our blog</span>
    <div className="tabletSPlus:grid-cols-2 tabletM:grid-cols-3 grid h-full w-full grid-flow-row grid-cols-1 gap-8">
      {blogs.map((blog, index) => (
        <BlogItem {...blog} key={index} />
      ))}
    </div>
  </ComponentWrapper>
);
