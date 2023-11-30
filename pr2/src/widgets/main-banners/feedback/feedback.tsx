import { FC } from 'react';
import { ComponentWrapper } from '@pr2/shared';
import { FeedbackBannerUI } from './feedback-ui';
import { feedbacks } from './constants';
import { FeedbackCard } from './feedback-card';

export const FeedbackBanner: FC = () => {
  return (
    <ComponentWrapper className="bg-blue-50 gap-28">
      <div className="flex flex-col w-1/2 gap-4">
        <span className="text-lg">
          What our clients <br /> say about us
        </span>
        <span className="text-bs-1">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit sed.
        </span>
      </div>
      <FeedbackBannerUI>
        {feedbacks.map(({ avatar, fullName, possition, text }, index) => (
          <FeedbackCard
            key={index}
            authorAvatarLink={avatar}
            authorFullName={fullName}
            authorPossition={possition}
            text={text}
          />
        ))}
      </FeedbackBannerUI>
    </ComponentWrapper>
  );
};
