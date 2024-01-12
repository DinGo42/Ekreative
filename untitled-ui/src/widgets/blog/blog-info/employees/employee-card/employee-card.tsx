import { Employees, Image } from '@untitled/shared';
import { FC } from 'react';
import { Rating } from './rating';

export const EmployeeCard: FC<Employees> = ({
  fullName,
  position,
  quote,
  rating,
  imageAlt,
  imageSrc,
}) => {
  return (
    <div className="relative flex items-end w-full h-full">
      <Image
        alt={imageAlt}
        src={imageSrc}
        style={{ width: '100%', height: '100%' }}
        className="h-[680px] w-full"
      />
      <div className="absolute bottom-0 w-full backdrop-blur-md bg-[#ffffff4d] phoneM:p-8 px-5 py-6 flex flex-col gap-8 justify-between">
        <span className="tabletM:text-medium-semibold-main text-semibold text-white">{`"${quote}"`}</span>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="tabletM:text-medium-semibold-main text-semibold text-white">
              {fullName}
            </span>
            <Rating rate={rating} />
          </div>
          <div className="flex justify-between max-phoneM:pb-[76px]">
            <div className="flex flex-col">
              <span className="text-medium-semibold-secondary text-white tabletS:w-2/3 tabletSPlus:w-full">
                {position}
              </span>
              <span className="tabletS:hidden tabletSPlus:block text-medium-semibold-secondary text-white">
                Hourglass Web Design Agency
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
