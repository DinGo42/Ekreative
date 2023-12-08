import { FC } from 'react';
import { validateDate } from '@untitled/shared';
import { Image } from '../image';
type AuthorInfoProps = {
  imageSrc: string;
  imageAlt: string;
  fullname: string;
  avatarBgColor?: string;
  publication: Date;
};

export const AuthorInfo: FC<AuthorInfoProps> = ({
  fullname,
  imageAlt,
  imageSrc,
  publication,
  avatarBgColor,
}) => {
  const { day, shortMonth, year } = validateDate(publication);
  return (
    <div className="flex w-full h-fit items-center gap-3">
      <Image
        alt={imageAlt}
        src={imageSrc}
        style={{ objectFit: 'cover', background: avatarBgColor }}
        className={'w-10 h-10 rounded-full border-[1.2px] border-gray-400'}
      />
      <div className="flex flex-col justify-center">
        <span className="text-small-semibold text-black-900">{fullname}</span>
        <span className="text-small-regular text-gray-600">
          {day + ' ' + shortMonth + ' ' + year}
        </span>
      </div>
    </div>
  );
};
