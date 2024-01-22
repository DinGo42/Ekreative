import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Months } from "../../constants";

type CardProps = {
  className?: string;
  text: string;
  title: string;
  children?: ReactNode;
  dateClassName?: string;
  textSpaceClassName?: string;
  date?: Date;
  titleClassName?: string;
  textClassName?: string;
  icon?: ReactNode;
};

export const Card: FC<CardProps> = ({
  icon,
  text,
  title,
  dateClassName,
  textSpaceClassName,
  children,
  date,
  className,
  textClassName,
  titleClassName,
}) => {
  const day = date && (date.getDate() < 9 ? "0" + date.getDate() : date.getDate());
  return (
    <div className={twMerge("text-h6 flex h-full w-full flex-col gap-6 bg-blue-50 p-12 pr-8", className)}>
      {icon}
      <div className={twMerge("flex w-full flex-col gap-3", textSpaceClassName)}>
        {date && (
          <span className={twMerge("text-label-secondary", dateClassName)}>
            {day + " " + Months[date.getMonth() + 1].shortMonth + " " + date.getFullYear()}
          </span>
        )}
        <span className={titleClassName}>{title}</span>
        <span className={twMerge("text-body-main", textClassName)}>{text}</span>
      </div>
      {children}
    </div>
  );
};
