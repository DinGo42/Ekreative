import { ComponentWrapper, validateDate, Image } from "@finsweet/shared";
import { blogs } from "@finsweet/widgets";

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
      <span className="text-h2 tabletS:w-[70%] mb-4">{title}</span>
      <div className="text-label-secondary mb-8 flex gap-1">
        <span className="opacity-90">{author}</span>
        <span>Posted on {day + daySuffix + " " + fullMonth + " " + year}</span>
      </div>
      <Image alt={imageAlt} src={imageSrc} className="mb-8 h-[480px] w-full" style={{ objectFit: "cover" }} />
      <ComponentWrapper className="max-tabletS:pl-0 max-tabletS:pr-0 desktopM:pb-0 flex-col items-start gap-8 pb-0 pl-[13.75rem] pr-[13.75rem] pt-0 text-start">
        <span className="text-h3">{mainInfoTitle}</span>
        <span className="text-opacity-70">{mainInfoText}</span>
        <div className="flex flex-col gap-6">
          <span className="text-h3 mt-2 pt-2">{secondaryInfoTitle}</span>
          <span className="text-opacity-70">{secondaryInfoTextPart1}</span>
          <ul className="max-tabletS:flex max-tabletS:flex-col max-tabletS:gap-5 list-inside list-disc">
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
            className="mb-6 h-80 w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className="text-h3 mb-4 text-start">{thirdInfoTitle}</span>
        <span className="text-opacity-70">{thirdInfoText}</span>
      </ComponentWrapper>
    </ComponentWrapper>
  );
};

export default BlogInfo;
