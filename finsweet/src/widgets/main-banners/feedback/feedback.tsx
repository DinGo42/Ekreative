import { FC } from 'react';
import { ComponentWrapper } from '@finsweet/shared';
import { FeedbackBannerUI } from './feedback-ui';
import { feedbacks } from './constants';
import { FeedbackCard } from './feedback-card';

export const FeedbackBanner: FC = () => {
  return (
    <ComponentWrapper className="bg-blue-50 gap-28 max-phoneSPlus:hidden">
      <div className="max-tabletM:hidden flex flex-col w-1/2 gap-4">
        <span className="text-h3">What our clients say about us</span>
        <span className="text-body-main">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
        </span>
      </div>
      <FeedbackBannerUI>
        {feedbacks.map(({ avatar, fullName, position, text }, index) => (
          <FeedbackCard
            key={index}
            authorAvatarLink={avatar}
            authorFullName={fullName}
            authorPosition={position}
            text={text}
          />
        ))}
      </FeedbackBannerUI>
    </ComponentWrapper>
  );
};
