import { FC } from "react";
import { Image } from "@finsweet/shared";

export type FeedbackCardProps = {
  authorFullName: string;
  authorPosition: string;
  authorAvatarLink: string;
  text: string;
};
export const FeedbackCard: FC<FeedbackCardProps> = ({ authorAvatarLink, authorFullName, authorPosition, text }) => (
  <div className="flex h-fit w-full flex-col gap-12 text-label-secondary tabletS:text-h5">
    <span>{text}</span>
    <div className="flex items-center justify-between gap-5">
      <div className="grid grid-flow-col grid-rows-1 gap-4">
        <Image src={authorAvatarLink} alt="avatar" width={52} height={52} />
        <div className="flex flex-col text-label-main">
          <span>{authorFullName}</span>
          <span className="text-h7">{authorPosition}</span>
        </div>
      </div>
    </div>
  </div>
);
