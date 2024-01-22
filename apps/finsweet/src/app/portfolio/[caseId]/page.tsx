import { ComponentWrapper, Image } from "@finsweet/shared";
import { PortfolioContactUsBanner, ourWorksCases } from "@finsweet/widgets";
import { twMerge } from "tailwind-merge";

export const dynamicParams = false;

export async function generateStaticParams() {
  return ourWorksCases.map(({ workCaseId }) => ({
    caseId: workCaseId,
  }));
}

const PortfolioProjectCase = ({ params }: { params: { caseId: string } }) => {
  const { caseId } = params;
  const workCase = ourWorksCases.find(({ workCaseId }) => workCaseId === caseId) || null;
  if (!workCase) return;
  const {
    client,
    deliverable,
    explanation,
    explanationSteps,
    imageAlt,
    imageBgClassName,
    imageSrc,
    keywords,
    name,
    projectDescription,
    projectDescriptionImageAlt,
    projectDescriptionImageSrc,
    projectDescriptionSteps,
    service,
    text,
    title,
  } = workCase;

  return (
    <>
      <ComponentWrapper className="text-body-main max-tabletS:pl-5 max-tabletS:pr-5 flex-col items-start gap-3 pl-[16.75rem] pr-[16.75rem]">
        <span className="text-h6 opacity-80">{name}</span>
        <span className="text-h2 tabletM:w-1/2 mb-1 w-full">{title}</span>
        <span className=" mb-9 w-3/4">{text}</span>
        <div
          className={twMerge(
            "max-tabletSPlus:bg-none phoneM:h-[666px] tabletSPlus:pb-8 tabletSPlus:pl-10 tabletSPlus:pr-10 tabletSPlus:pt-8 tabletM:pb-16 tabletM:pl-20 tabletM:pr-20 tabletM:pt-16 mb-9 h-[300px] w-full",
            imageBgClassName,
          )}
        >
          <Image src={imageSrc} alt={imageAlt} style={{ objectFit: "fill" }} />
        </div>
        <div className="border-blue-1000 text-h6 max-tabletM:flex-col max-tabletM:gap-8 tabletM:border-b-[1.5px] flex w-full justify-between border-opacity-30 pb-4">
          <div className="flex flex-col gap-1">
            <span className="text-label-secondary opacity-80">Client</span>
            <span>{client}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-label-secondary opacity-80">Service</span>
            <span>{service}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-label-secondary opacity-80">Deliverable</span>
            <span>{deliverable}</span>
          </div>
        </div>
        <ComponentWrapper className="text-body-main max-tabletM:pl-5 max-tabletM:pr-5 phoneM:pl-14 phoneM:pr-14 desktopS:pl-28 desktopS:pr-28 flex-col items-start gap-3  pt-20">
          <span className="text-h3">About the project</span>
          <span className="mb-3 opacity-70">{projectDescription}</span>
          <ul className="max-tabletS:flex max-tabletS:flex-col max-tabletS:gap-5 mb-12 list-inside list-disc">
            {projectDescriptionSteps.map((step, index) => (
              <li key={index} className="text-opacity-70">
                {step}
              </li>
            ))}
          </ul>
          <div
            className={twMerge(
              "max-tabletSPlus:bg-none max-tabletS:hidden tabletSPlus:pb-5 tabletSPlus:pl-7 tabletSPlus:pr-7 tabletSPlus:pt-5 tabletM:pb-10 tabletM:pl-14 tabletM:pr-14 tabletM:pt-10 mb-12 h-[506px] w-full",
              imageBgClassName,
            )}
          >
            <Image
              src={projectDescriptionImageSrc}
              alt={projectDescriptionImageAlt}
              style={{
                objectFit: "fill",
              }}
            />
          </div>
          <span className="text-h3">How we do it</span>
          <span className="mb-3 opacity-70">{explanation}</span>
          <ul className="max-tabletS:flex max-tabletS:flex-col max-tabletS:gap-5 mb-20 list-inside list-disc">
            {explanationSteps.map((step, index) => (
              <li key={index} className="text-opacity-70">
                {step}
              </li>
            ))}
          </ul>
          <div className="border-blue-1000 max-desktopS:flex-wrap flex gap-14 border-b-[1.5px] border-t-[1.5px] border-opacity-20 pb-6 pt-6">
            <span className="text-h6 text-blue-700">Keywords</span>
            {keywords.map((keyword, index) => (
              <span key={index} className="text-label-main text-blue-1000 opacity-70">
                {keyword}
              </span>
            ))}
          </div>
        </ComponentWrapper>
        <PortfolioContactUsBanner
          className="self-center pb-0 pl-0 pr-0"
          titleClassName="tabletM:w-[80%] w-full"
          textClassName="tabletM:w-[65%] w-full"
        />
      </ComponentWrapper>
    </>
  );
};

export default PortfolioProjectCase;
