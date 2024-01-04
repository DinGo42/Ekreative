import { FC } from 'react';
import { twJoin } from 'tailwind-merge';

type NotificationProps = {
  copiedColor: string;
  className: string;
};
enum CopyPhrases {
  COOL = 'COOL!',
  ILLROCK = 'IT`LL ROCK!',
  PASTE_ME = 'PASTE ME!',
  GOT_IT = 'GOT IT!',
  WILL_DO = 'WILL DO!',
  RIGHT_ONE = 'RIGHT ONE!',
}

const getRandomCopyPhrase = () => {
  const phrases = Object.values(CopyPhrases);
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
};

export const Notification: FC<NotificationProps> = ({
  className,
  copiedColor,
}) => (
  <div
    className={twJoin(
      'absolute w-screen h-screen left-0 top-0 z-50 flex flex-col justify-center transition-all text-center tabletS_Plus:text-large-secondary text-medium-secondary',
      className
    )}
    style={{ background: copiedColor }}
  >
    <span className="w-full bg-[#ffffff33] tabletS_Plus:text-large-main text-medium-main mb-10">
      {getRandomCopyPhrase()}
    </span>
    <span>{copiedColor}</span>
  </div>
);
