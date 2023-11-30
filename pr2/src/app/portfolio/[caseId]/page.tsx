import { ComponentWrapper, Image } from '@pr2/shared';
import { PortfolioContactUsBanner, ourWorksCases } from '@pr2/widgets';
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
      <ComponentWrapper className="flex-col gap-3 text-bs-1 pl-[16.75rem] pr-[16.75rem] items-start">
        <span className="text-xs opacity-80">{name}</span>
        <span className="mb-1 text-xl w-1/2">{title}</span>
        <span className=" mb-9 w-2/3">{text}</span>
        <div
          className={twMerge(
            'w-full h-[666px] pl-20 pr-20 pt-16 pb-16 mb-9',
            imageBgClassName
          )}
        >
          <Image src={imageSrc} alt={imageAlt} style={{ objectFit: 'fill' }} />
        </div>
        <div className="flex gap-40 pb-8 border-b-[1.5px] border-blue-1000 w-full border-opacity-30 text-xs justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-lb-2 opacity-80">Client</span>
            <span>{client}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lb-2 opacity-80">Sevice</span>
            <span>{service}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lb-2 opacity-80">Deliverable</span>
            <span>{deliverable}</span>
          </div>
        </div>
        <ComponentWrapper className="flex-col gap-3 text-bs-1 pl-[6.875rem] pr-[6.875rem] pt-20 items-start">
          <span className="text-lg">About the project</span>
          <span className="mb-3 opacity-70">{projectDescription}</span>
          <ul className="mb-12 list-disc list-inside">
            {projectDescriptionSteps.map((step, index) => (
              <li key={index} className="text-opacity-70">
                {step}
              </li>
            ))}
          </ul>
          <div
            className={twMerge(
              'w-full h-[506px] pl-14 pr-14 pt-10 pb-10 mb-12',
              imageBgClassName
            )}
          >
            <Image
              src={projectDescriptionImageSrc}
              alt={projectDescriptionImageAlt}
              style={{ objectFit: 'fill' }}
            />
          </div>
          <span className="text-lg">How we do it</span>
          <span className="mb-3 opacity-70">{explanation}</span>
          <ul className="mb-20 list-disc list-inside">
            {explanationSteps.map((step, index) => (
              <li key={index} className="text-opacity-70">
                {step}
              </li>
            ))}
          </ul>
          <div className="flex border-t-[1.5px] border-b-[1.5px] border-blue-1000 pt-6 pb-6 gap-14 border-opacity-20">
            <span className="text-blue-700 text-xs">Keywords</span>
            {keywords.map((keyword, index) => (
              <span key={index} className="text-blue-1000 opacity-70 text-lb-1">
                {keyword}
              </span>
            ))}
          </div>
        </ComponentWrapper>
        <PortfolioContactUsBanner className="pl-0 pr-0 pb-0 self-center" />
      </ComponentWrapper>
    </>
  );
};

export default PortfolioProjectCase;
