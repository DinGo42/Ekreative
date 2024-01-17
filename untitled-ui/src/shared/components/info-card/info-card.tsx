import { ArrowUpIcon } from "@untitled/icons";
import { FC, ReactNode } from "react";
import { Image, ImageProps } from "../image";
import { twJoin, twMerge } from "tailwind-merge";
import { Link } from "../link";

export type InfoCardProps = {
  imageSrc: string;
  imageAlt: string;
  description: string | ReactNode;
  title: string;
  text: string;
  href: string;
  imageStyle?: ImageProps["style"];
  children?: ReactNode;
  ImageClassName?: string;
  className?: string;
  textSpacesClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  textClassName?: string;
};

export const InfoCard: FC<InfoCardProps> = ({
  children,
  href,
  imageSrc,
  imageAlt,
  description,
  text,
  title,
  imageStyle,
  ImageClassName,
  className,
  textSpacesClassName,
  descriptionClassName,
  textClassName,
  titleClassName = "text-semibold",
}) => (
  <div className={twMerge("flex h-fit w-full flex-col gap-2 bg-white", className)}>
    <Image style={imageStyle} alt={imageAlt} src={imageSrc} className={twJoin("mb-3 rounded-2xl", ImageClassName)} />
    <div className={twMerge("flex flex-col gap-2", textSpacesClassName)}>
      <div className={twJoin(descriptionClassName, "text-small-semibold text-purple-800")}>{description}</div>
      <div className="flex justify-between">
        <span className={twMerge("text-semibold text-black-900", titleClassName)}>{title}</span>
        <Link href={href}>
          <ArrowUpIcon />
        </Link>
      </div>
      <span
        className={twJoin(
          textClassName,
          "mb-4 line-clamp-2 h-12 overflow-hidden text-ellipsis text-medium-regular text-gray-600",
        )}
      >
        {text}
      </span>
      {children}
    </div>
  </div>
);
