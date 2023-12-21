import {
  ButtonStyleTypes,
  Image,
  Routes,
  Tag,
  TagDesignCode,
  blogData,
  validateDate,
} from '@untitled/shared';
import {
  BlogInfoMailing,
  Employees,
  LatestWrittings,
  OtherBlogs,
} from '@untitled/widgets';
import Link from 'next/link';
import { FC } from 'react';

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogData.map(({ id }) => ({
    blog_id: id,
  }));
}

type BlogInfoProps = { params: { blog_id: string } };

const BlogInfo: FC<BlogInfoProps> = ({ params }) => {
  const blog = blogData.find(({ id }) => params.blog_id === id);
  if (!blog) return;
  const { imageAlt, imageSrc, fullname, publication, title, tags, text } = blog;
  const { day, shortMonth, year } = validateDate(publication)!;

  return (
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
      </div>
      <BlogInfoMailing />

      <div className="flex flex-col gap-2">
        <Image src={imageSrc} alt={imageAlt} />
        <span className="text-purple-800 text-small-semibold mt-3">
          {`${fullname} • ${day} ${shortMonth} ${year}`}
        </span>
        <span className="text-black-900 text-medium-semibold-main">
          {title}
        </span>
        <span className="text-gray-600 text-medium-regular mb-4">{text}</span>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} className={TagDesignCode[tag]} text={tag} />
          ))}
        </div>
      </div>
      <OtherBlogs currentBlogId={params.blog_id} />
      <div className="flex w-screen -mx-[calc((100vw-100%)/2)] px-4 bg-white-800 justify-center py-16 tabletS:py-24 mt-8">
        <div className="flex flex-col w-full max-w-[1280px]  gap-5">
          <div className="flex w-full justify-between items-center">
            <span className="text-medium-semibold-main text-black-900">
              Latest writings
            </span>
            <Link
              className={
                'max-phoneM:hidden text-center bg-purple-800 p-3 rounded-lg text-white px-[18px] py-3 w-fit'
              }
              href={Routes.BLOG}
            >
              View all posts
            </Link>
          </div>
          <span className="text-regular-main text-gray-600">
            The latest news, technologies, and resources from our team.
          </span>
          <LatestWrittings />
          <Link
            className={
              'phoneM:hidden text-center bg-purple-800 p-3 rounded-lg text-white px-[18px] py-3 w-full mt-7'
            }
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
