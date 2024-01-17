import { StarIcon, HalfStarIcon } from "@untitled/icons";
import { FC } from "react";

type RatingProps = {
  rate: number;
  length?: number;
};
export const Rating: FC<RatingProps> = ({ rate, length = 5 }) => {
  return (
    <div className="flex items-center max-tabletS:hidden">
      {Array.from({ length: length }, (unknown, index) => (
        <span key={index}>
          {rate >= index + 1 ? <StarIcon /> : rate >= index + 0.5 ? <HalfStarIcon /> : <StarIcon fill={"#ffffff"} />}
        </span>
      ))}
    </div>
  );
};
