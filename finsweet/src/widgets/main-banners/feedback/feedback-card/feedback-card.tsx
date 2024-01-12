import { FC } from 'react';
import { Image } from '@finsweet/shared';

export type FeedbackCardProps = {
  authorFullName: string;
  authorPosition: string;
  authorAvatarLink: string;
  text: string;
};
export const FeedbackCard: FC<FeedbackCardProps> = ({
  authorAvatarLink,
  authorFullName,
  authorPosition,
  text,
}) => (
  <div className="w-full h-fit tabletS:text-h5 text-label-secondary gap-12 flex flex-col">
    <span>{text}</span>
    <div className="flex items-center gap-5 justify-between">
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <Image src={authorAvatarLink} alt="avatar" width={52} height={52} />
        <div className="flex flex-col text-label-main">
          <span>{authorFullName}</span>
          <span className="text-h7">{authorPosition}</span>
        </div>
      </div>
    </div>
  </div>
);
