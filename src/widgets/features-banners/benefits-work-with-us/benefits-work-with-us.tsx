import { BenefitList, ComponentWrapper, InfoCard, Sponsors } from '@pr2/shared';
import {
  benefitsWorkWithOurTeamCard,
  reasonWorkWithOurTeam,
} from './constants';

export const BenefitsWorkWithOurTeamBanner = () => (
  <>
    <ComponentWrapper className="w-full h-fit gap-12 flex-col pt-24 ">
      <Sponsors />
      <span className="text-xl text-center mt-12">
        The benefits of working <br /> with us
      </span>
      <BenefitList benefitsList={reasonWorkWithOurTeam} />
    </ComponentWrapper>
    {benefitsWorkWithOurTeamCard.map((card, index) => (
      <InfoCard {...card} key={index} />
    ))}
  </>
);
