import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Months } from '../constants';

type CardProps = {
  className?: string;
  text: string;
  title: string;
  children?: ReactNode;
  dateClassName?: string;
  textSpaceCassName?: string;
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
  textSpaceCassName,
  children,
  date,
  className,
  textClassName,
  titleClassName,
}) => {
  const day =
    date && (date.getDate() < 9 ? '0' + date.getDate() : date.getDate());
  return (
    <div
      className={twMerge(
        'flex w-full h-full flex-col text-xs bg-blue-50 p-12 pr-8 gap-6',
        className
      )}
    >
      {icon}
      <div className={twMerge('flex flex-col w-full gap-3', textSpaceCassName)}>
        {date && (
          <span className={twMerge('text-lb-2', dateClassName)}>
            {day + ' ' + Months[date.getMonth()] + ' ' + date.getFullYear()}
          </span>
        )}
        <span className={titleClassName}>{title}</span>
        <span className={twMerge('text-bs-1', textClassName)}>{text}</span>
      </div>
      {children}
    </div>
  );
};
