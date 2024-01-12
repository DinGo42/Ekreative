import { ComponentWrapper, Image } from '@finsweet/shared';
import { PortfolioContactUsBanner, ourWorksCases } from '@finsweet/widgets';
import { twMerge } from 'tailwind-merge';

export const dynamicParams = false;

export async function generateStaticParams() {
  return ourWorksCases.map(({ workCaseId }) => ({
    caseId: workCaseId,
  }));
}

const PortfolioProjectCase = ({ params }: { params: { caseId: string } }) => {
  const { caseId } = params;
  const workCase =
    ourWorksCases.find(({ workCaseId }) => workCaseId === caseId) || null;
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
      <ComponentWrapper className="flex-col gap-3 text-body-main pl-[16.75rem] pr-[16.75rem] max-tabletS:pl-5 max-tabletS:pr-5 items-start">
        <span className="text-h6 opacity-80">{name}</span>
        <span className="mb-1 text-h2 tabletM:w-1/2 w-full">{title}</span>
        <span className=" mb-9 w-3/4">{text}</span>
        <div
          className={twMerge(
            'w-full phoneM:h-[666px] h-[300px] tabletM:pl-20 tabletM:pr-20 tabletM:pt-16 tabletM:pb-16 tabletSPlus:pl-10 tabletSPlus:pr-10 tabletSPlus:pt-8 tabletSPlus:pb-8 max-tabletSPlus:bg-none mb-9',
            imageBgClassName
          )}
        >
          <Image src={imageSrc} alt={imageAlt} style={{ objectFit: 'fill' }} />
        </div>
        <div className="max-tabletM:flex-col flex max-tabletM:gap-8 pb-4 tabletM:border-b-[1.5px] border-blue-1000 w-full border-opacity-30 text-h6 justify-between">
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
        <ComponentWrapper className="flex-col gap-3 text-body-main desktopS:pr-28 desktopS:pl-28 phoneM:pl-14 phoneM:pr-14 max-tabletM:pl-5 max-tabletM:pr-5 pt-20  items-start">
          <span className="text-h3">About the project</span>
          <span className="mb-3 opacity-70">{projectDescription}</span>
          <ul className="mb-12 list-disc list-inside max-tabletS:flex max-tabletS:flex-col max-tabletS:gap-5">
            {projectDescriptionSteps.map((step, index) => (
              <li key={index} className="text-opacity-70">
                {step}
              </li>
            ))}
          </ul>
          <div
            className={twMerge(
              'max-tabletS:hidden w-full h-[506px] tabletM:pl-14 tabletM:pr-14 tabletM:pt-10 tabletM:pb-10 tabletSPlus:pl-7 tabletSPlus:pr-7 tabletSPlus:pt-5 tabletSPlus:pb-5 max-tabletSPlus:bg-none mb-12',
              imageBgClassName
            )}
          >
            <Image
              src={projectDescriptionImageSrc}
              alt={projectDescriptionImageAlt}
              style={{ objectFit: 'fill' }}
            />
          </div>
          <span className="text-h3">How we do it</span>
          <span className="mb-3 opacity-70">{explanation}</span>
          <ul className="mb-20 list-disc list-inside max-tabletS:flex max-tabletS:flex-col max-tabletS:gap-5">
            {explanationSteps.map((step, index) => (
              <li key={index} className="text-opacity-70">
                {step}
              </li>
            ))}
          </ul>
          <div className="max-desktopS:flex-wrap flex border-t-[1.5px] border-b-[1.5px] border-blue-1000 pt-6 pb-6 gap-14 border-opacity-20">
            <span className="text-blue-700 text-h6">Keywords</span>
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="text-blue-1000 opacity-70 text-label-main"
              >
                {keyword}
              </span>
            ))}
          </div>
        </ComponentWrapper>
        <PortfolioContactUsBanner
          className="pl-0 pr-0 pb-0 self-center"
          titleClassName="tabletM:w-[80%] w-full"
          textClassName="tabletM:w-[65%] w-full"
        />
      </ComponentWrapper>
    </>
  );
};

export default PortfolioProjectCase;
