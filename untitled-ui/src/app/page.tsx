import { AuthorInfo, Footer, InfoCard, LargeInfoCard } from '@untitled/shared';
import { Blog, FreeTrial, Mailing } from '@untitled/widgets';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-3">
        <span className="text-small-semibold tabletM:text-medium-semibold-secondary text-purple-800">
          Our blog
        </span>
        <span className="text-medium-semibold-main tabletM:text-large-semibold text-black-900 mb-1 tabletM:mb-3">
          Resources and insights
        </span>
        <span className="text-medium-regular tabletM:text-regular-main text-gray-600">
          The latest industry news, interviews, technologies, and resources.
        </span>
      </div>
      <div className="tabletSPlus:hidden">
        <InfoCard
          href=""
          imageStyle={{ width: '100%', height: '100%' }}
          className="w-full"
          imageAlt="tools-and-trends"
          imageSrc="/posts/tools-and-trends.png"
          description="Design"
          text='Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.'
          title='Improve your design skills: Develop an "eye" for design'
        >
          <AuthorInfo
            fullName="Amélie Laurent"
            imageAlt="Amélie Laurent"
            imageSrc="/posts/tools-and-trends-author-avatar.png"
            publication={new Date(2024, 1, 20)}
          />
        </InfoCard>
      </div>
      <LargeInfoCard
        authorFullName="Amélie Laurent"
        href=""
        authorAlt="Amélie Laurent"
        authorSrc="/posts/tools-and-trends-author-avatar.png"
        imageAlt="tools-and-trends"
        imageSrc="/posts/tools-and-trends.png"
        tags={['Design', 'Research', 'Presentation']}
        publication={new Date(2024, 1, 20)}
        text='Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.'
        title='Improve your design skills: Develop an "eye" for design'
        className="max-tabletSPlus:hidden"
      />
      <Blog />

      <FreeTrial />
      <Mailing />
      <Footer />
    </>
  );
};
export default Home;
