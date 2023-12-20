import { FC } from 'react';
import { validateDate } from '@untitled/shared';
import { Image } from '../image';
import { twMerge } from 'tailwind-merge';
export type AuthorInfoProps = {
  imageSrc: string;
  imageAlt: string;
  fullname: string;
  avatarBgColor?: string;
  publication?: Date;
  className?: string;
  textSpaceClassName?: string;
};

export const AuthorInfo: FC<AuthorInfoProps> = ({
  fullname,
  imageAlt,
  imageSrc,
  publication,
  avatarBgColor,
  className,
  textSpaceClassName,
}) => {
  const isDateShown = () => {
    if (!publication) return <></>;
    const { day, shortMonth, year } = validateDate(new Date(publication))!;
    return (
      <span className="text-small-regular text-gray-600">
        {day + ' ' + shortMonth + ' ' + year}
      </span>
    );
  };
  return (
    <div className={twMerge('flex w-full h-fit items-center gap-3', className)}>
      <Image
        alt={imageAlt}
        src={imageSrc}
        style={{
          objectFit: 'cover',
          background: avatarBgColor,
          width: '100%',
          height: '100%',
        }}
        className={'w-10 h-10 rounded-full border-[1.2px] border-gray-400'}
      />
      <div
        className={twMerge(
          'flex flex-col justify-center text-black-900',
          textSpaceClassName
        )}
      >
        <span className="text-small-semibold">{fullname}</span>
        {isDateShown()}
      </div>
    </div>
  );
};
