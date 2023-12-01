import { FC } from 'react';
import { Image } from '@pr2/shared';

export type FeedbackCardProps = {
  authorFullName: string;
  authorPossition: string;
  authorAvatarLink: string;
  text: string;
};
export const FeedbackCard: FC<FeedbackCardProps> = ({
  authorAvatarLink,
  authorFullName,
  authorPossition,
  text,
}) => (
  <div className="w-full h-fit text-sm gap-12 flex flex-col">
    <span>{text}</span>
    <div className="flex items-center gap-5 justify-between">
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <Image src={authorAvatarLink} alt="avatar" width={52} height={52} />
        <div className="flex flex-col text-lb-1">
          <span>{authorFullName}</span>
          <span className="text-xxs">{authorPossition}</span>
        </div>
      </div>
    </div>
  </div>
);
