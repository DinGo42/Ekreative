import { FC } from "react";
import { twJoin } from "tailwind-merge";

type NotificationProps = {
  copiedColor: string;
  className: string;
  text: string;
};

export const Notification: FC<NotificationProps> = ({ className, copiedColor, text }) => (
  <div
    className={twJoin(
      "absolute left-0 top-0 z-50 flex h-screen w-screen flex-col justify-center text-center text-medium-secondary transition-all tabletS_Plus:text-large-secondary",
      className,
    )}
    style={{ background: copiedColor }}
  >
    <span className="mb-10 w-full bg-[#ffffff33] text-medium-main tabletS_Plus:text-large-main">{text}</span>
    <span>{copiedColor}</span>
  </div>
);
