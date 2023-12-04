import {
  BenefitList,
  ComponentWrapper,
  InfoCard,
  Sponsors,
} from '@finsweet/shared';
import {
  benefitsWorkWithOurTeamCard,
  reasonWorkWithOurTeam,
} from './constants';
import { twMerge } from 'tailwind-merge';
import { FC } from 'react';

export const BenefitsWorkWithOurTeamBanner:FC = () => (
  <>
    <ComponentWrapper className="w-full h-fit gap-12 flex-col pt-24 ">
      <Sponsors />
      <span className="text-xl text-center mt-12 tabletS:w-1/2">
        The benefits of working with us
      </span>
      <BenefitList
        benefitsList={reasonWorkWithOurTeam}
        className="max-tabletM:grid-cols-1 max-tabletM:grid-rows-3"
      />
    </ComponentWrapper>
    {benefitsWorkWithOurTeamCard.map(
      (
        { cardTextSpaceClassName, imageClassName, cardClassName, ...card },
        index
      ) => (
        <InfoCard
          {...card}
          key={index}
          cardClassName={twMerge(
            'max-tabletS_Plus:flex-col max-tabletS_Plus:gap-16',
            cardClassName
          )}
          imageClassName={twMerge(imageClassName, 'max-tabletS_Plus:w-full')}
          cardTextSpaceClassName={twMerge(
            cardTextSpaceClassName,
            'max-tabletS_Plus:w-full'
          )}
        />
      )
    )}
  </>
);
