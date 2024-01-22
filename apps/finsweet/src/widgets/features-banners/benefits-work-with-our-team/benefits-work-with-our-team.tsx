import { BenefitList, ComponentWrapper, InfoCard, Sponsors } from "@finsweet/shared";
import { benefitsWorkWithOurTeamCard, reasonWorkWithOurTeam } from "./constants";
import { twMerge } from "tailwind-merge";
import { FC } from "react";

export const BenefitsWorkWithOurTeamBanner: FC = () => (
  <>
    <ComponentWrapper className="h-fit w-full flex-col gap-12 pt-24 ">
      <Sponsors />
      <span className="text-h2 tabletS:w-1/2 mt-12 text-center">The benefits of working with us</span>
      <BenefitList benefitsList={reasonWorkWithOurTeam} className="max-tabletM:grid-cols-1 max-tabletM:grid-rows-3" />
    </ComponentWrapper>
    {benefitsWorkWithOurTeamCard.map(({ cardTextSpaceClassName, imageClassName, cardClassName, ...card }, index) => (
      <InfoCard
        {...card}
        key={index}
        cardClassName={twMerge("max-tabletSPlus:flex-col max-tabletSPlus:gap-16", cardClassName)}
        imageClassName={twMerge(imageClassName, "max-tabletSPlus:w-full")}
        cardTextSpaceClassName={twMerge(cardTextSpaceClassName, "max-tabletSPlus:w-full")}
      />
    ))}
  </>
);
