import { CSSProperties, FC } from "react";
import { twMerge } from "tailwind-merge";
import { ComponentWrapper } from "../wrappers";
import { Image } from "../image";

export type InfoCardProps = {
  leftImagePosition?: boolean;
  cardName: string;
  imageSrc: string;
  imageAlt: string;
  imageStyle?: CSSProperties;
  imageClassName?: string;
  cardClassName?: string;
  cardNameClassName?: string;
  cardTitleClassName?: string;
  cardTextClassName?: string;
  cardTextSpaceClassName?: string;
  cardTitle: string;
  cardText: string;
};

export const InfoCard: FC<InfoCardProps> = ({
  cardName,
  cardText,
  cardClassName,
  cardNameClassName,
  cardTextClassName,
  cardTextSpaceClassName,
  cardTitleClassName,
  imageAlt,
  imageClassName,
  imageStyle,
  imageSrc,
  cardTitle,
  leftImagePosition: leftImagePosition,
}) => (
  <ComponentWrapper
    className={twMerge(
      "justify-between bg-blue-50",
      cardClassName,
      leftImagePosition ? "flex-row-reverse" : "flex-row",
    )}
  >
    <div className={twMerge("mt-14 flex h-full w-fit flex-col gap-4", cardTextSpaceClassName)}>
      <span className={twMerge(cardNameClassName, "text-label-main")}>{cardName}</span>
      <span className={twMerge("text-h3", cardTitleClassName)}>{cardTitle}</span>
      <span className={twMerge("text-body-main", cardTextClassName)}>{cardText}</span>
    </div>
    <Image
      src={imageSrc}
      alt={imageAlt}
      style={{
        objectFit: "cover",
        ...imageStyle,
      }}
      className={twMerge("h-96 w-fit", imageClassName)}
    />
  </ComponentWrapper>
);
