import { FC } from 'react';
import { twJoin } from 'tailwind-merge';

type NotificationProps = {
  copiedColor: string;
  className: string;
  text: string;
};

export const Notification: FC<NotificationProps> = ({
  className,
  copiedColor,
  text,
}) => (
  <div
    className={twJoin(
      'absolute w-screen h-screen left-0 top-0 z-50 flex flex-col justify-center transition-all text-center tabletS_Plus:text-large-secondary text-medium-secondary',
      className
    )}
    style={{ background: copiedColor }}
  >
    <span className="w-full bg-[#ffffff33] tabletS_Plus:text-large-main text-medium-main mb-10">
      {text}
    </span>
    <span>{copiedColor}</span>
  </div>
);
