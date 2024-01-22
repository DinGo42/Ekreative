import { BlogFooter } from "@untitled/shared";
import { BlogPosts, BlogFreeTrial } from "@untitled/widgets";
import { FC } from "react";

const Blog: FC = () => (
  <>
    <div className="flex flex-col gap-3 text-center">
      <span className="text-small-semibold text-purple-800">Our blog</span>
      <div className="tabletS:mb-9 tabletS:gap-6 mb-5 flex flex-col gap-4">
        <span className="text-medium-semibold-main text-black-900 tabletS:text-large-semibold">
          The latest writings from our team
        </span>
        <span className="text-regular-main text-gray-600">
          The latest industry news, interviews, technologies, and resources.
        </span>
      </div>
      <BlogPosts />
      <BlogFreeTrial />
    </div>
    <BlogFooter />
  </>
);
export default Blog;
