import { AuthorInfo, InfoCard } from '@untitled/shared';
import { Blogs, FreeTrial, Mailing } from '@untitled/widgets';

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full gap-3">
        <span className="text-small-semibold text-purple-800">Our blog</span>
        <span className="text-medium-semibold-main text-black-900 mb-1">
          Resources and insights
        </span>
        <span className="text-medium-regular text-gray-600">
          The latest industry news, interviews, technologies, and resources.
        </span>
      </div>
      <InfoCard
        href=""
        imageAlt=""
        imageSrc="/posts/tools-and-trends.png"
        name="Design"
        text='Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.'
        title='Improve your design skills: Develop an "eye" for design'
      >
        <AuthorInfo
          fullname="Amélie Laurent"
          imageAlt=""
          imageSrc="/posts/tools-and-trends-author-avatar.png"
          publication={new Date(2024, 1, 20)}
        />
      </InfoCard>
      <Blogs />

      <FreeTrial />
      <Mailing />
    </>
  );
}
