import { Image, Link, Routes, Tag, TagDesignCode, blogData, validateDate } from "@untitled/shared";
import { BlogInfoMailing, Employees, LatestWritings, OtherBlogs } from "@untitled/widgets";
import { FC } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogData.map(({ id }) => ({
    blogId: id,
  }));
}

type BlogInfoProps = { params: { blogId: string } };

const BlogInfo: FC<BlogInfoProps> = ({ params }) => {
  const blog = blogData.find(({ id }) => params.blogId === id);
  if (!blog) return;
  const { imageAlt, imageSrc, fullName, publication, title, tags, text } = blog;
  const { day, shortMonth, year } = validateDate(publication)!;

  return (
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
      </div>
      <BlogInfoMailing />

      <div className="flex flex-col gap-2">
        <Image src={imageSrc} alt={imageAlt} className="rounded-2xl" />
        <span className="text-small-semibold mt-3 text-purple-800">{`${fullName} • ${day} ${shortMonth} ${year}`}</span>
        <span className="text-medium-semibold-main text-black-900">{title}</span>
        <span className="text-medium-regular mb-4 text-gray-600">{text}</span>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} className={TagDesignCode[tag]} text={tag} />
          ))}
        </div>
      </div>
      <OtherBlogs currentBlogId={params.blogId} />
      <div className="bg-white-800 tabletS:py-24 -mx-[calc((100vw-100%)/2)] mt-8 flex w-screen justify-center px-4 py-16">
        <div className="flex w-full max-w-[1280px] flex-col  gap-5">
          <div className="flex w-full items-center justify-between">
            <span className="text-medium-semibold-main text-black-900">Latest writings</span>
            <Link
              className={"max-phoneM:hidden w-fit rounded-lg bg-purple-800 p-3 px-[18px] py-3 text-center text-white"}
              href={Routes.BLOG}
            >
              View all posts
            </Link>
          </div>
          <span className="text-regular-main text-gray-600">
            The latest news, technologies, and resources from our team.
          </span>
          <LatestWritings />
          <Link
            className={"phoneM:hidden mt-7 w-full rounded-lg bg-purple-800 p-3 px-[18px] py-3 text-center text-white"}
            href={Routes.BLOG}
          >
            View all posts
          </Link>
        </div>
      </div>
      <Employees />
    </>
  );
};
export default BlogInfo;
