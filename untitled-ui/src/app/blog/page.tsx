import { BlogPosts, BlogFreeTrial } from '@untitled/widgets';

const Blog = () => (
  <>
    <div className="flex flex-col gap-3 text-center">
      <span className="text-small-semibold text-purple-800">Our blog</span>
      <div className="flex flex-col gap-4 tabletS:gap-6 tabletS:mb-9 mb-5">
        <span className="text-medium-semibold-main tabletS:text-large-semidold text-black-900">
          The latest writings from our team
        </span>
        <span className="text-regular-main text-gray-600">
          The latest industry news, interviews, technologies, and resources.
        </span>
      </div>
      <BlogPosts />
      <BlogFreeTrial />
    </div>
  </>
);
export default Blog;
