import { ComponentWrapper, validateDate, Image } from '@pr2/shared';
import { blogs } from '@pr2/widgets';

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogs.map(({ id }) => ({
    blogId: id,
  }));
}

const BlogInfo = ({ params }: { params: { blogId: string } }) => {
  const blog = blogs.find(({ id }) => id === params.blogId);
  if (!blog) return;
  const {
    author,
    date,
    imageAlt,
    imageSrc,
    mainInfoText,
    mainInfoTitle,
    secondaryImageAlt,
    secondaryImageSrc,
    secondaryInfoTextPart1,
    secondaryInfoTextPart2,
    secondaryInfoTextSteps,
    secondaryInfoTitle,
    thirdInfoText,
    thirdInfoTitle,
    title,
  } = blog;
  const { day, daySuffix, fullMonth, year } = validateDate(date);
  return (
    <ComponentWrapper className="flex-col gap-4 text-center">
      <span className="mb-4 text-xl w-[60%]">{title}</span>
      <div className="flex text-lb-2 gap-1 mb-4">
        <span className="opacity-90">{author}</span>
        <span>Posted on {day + daySuffix + ' ' + fullMonth + ' ' + year}</span>
      </div>
      <Image
        alt={imageAlt}
        src={imageSrc}
        className="h-[480px] w-full mb-4"
        style={{ objectFit: 'cover' }}
      />
      <ComponentWrapper className="flex-col gap-8 pb-0 pt-0 text-start pl-[13.75rem] pr-[13.75rem] items-start">
        <span className="text-lg">{mainInfoTitle}</span>
        <span className="text-opacity-70">{mainInfoText}</span>
        <div className="flex flex-col gap-6">
          <span className="text-lg pt-2 mt-2">{secondaryInfoTitle}</span>
          <span className="text-opacity-70">{secondaryInfoTextPart1}</span>
          <ul className="list-inside list-disc">
            {secondaryInfoTextSteps.map((step, index) => (
              <li key={index} className="text-opacity-70">
                {step}
              </li>
            ))}
          </ul>
          <span className="text-opacity-70">{secondaryInfoTextPart2}</span>
          <Image
            alt={secondaryImageAlt}
            src={secondaryImageSrc}
            className="h-80 w-full mb-6"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <span className="mb-4 text-lg text-start">{thirdInfoTitle}</span>
        <span className="text-opacity-70">{thirdInfoText}</span>
      </ComponentWrapper>
    </ComponentWrapper>
  );
};

export default BlogInfo;
