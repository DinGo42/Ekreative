import { Employees, Image } from "@untitled/shared";
import { FC } from "react";
import { Rating } from "./rating";

export const EmployeeCard: FC<Employees> = ({ fullName, position, quote, rating, imageAlt, imageSrc }) => {
  return (
    <div className="relative flex h-full w-full items-end">
      <Image alt={imageAlt} src={imageSrc} style={{ width: "100%", height: "100%" }} className="h-[680px] w-full" />
      <div className="phoneM:p-8 absolute bottom-0 flex w-full flex-col justify-between gap-8 bg-[#ffffff4d] px-5 py-6 backdrop-blur-md">
        <span className="text-semibold tabletM:text-medium-semibold-main text-white">{`"${quote}"`}</span>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-semibold tabletM:text-medium-semibold-main text-white">{fullName}</span>
            <Rating rate={rating} />
          </div>
          <div className="max-phoneM:pb-[76px] flex justify-between">
            <div className="flex flex-col">
              <span className="text-medium-semibold-secondary tabletS:w-2/3 tabletSPlus:w-full text-white">
                {position}
              </span>
              <span className="text-medium-semibold-secondary tabletS:hidden tabletSPlus:block text-white">
                Hourglass Web Design Agency
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
