import { FC, ReactNode } from 'react';
import { Card } from './card';
import { twMerge } from 'tailwind-merge';

type BenefitListProps = {
  benefitsList: { icon: ReactNode; title: string; text: string }[];
  className?: string;
  cardClassName?: string;
};

export const BenefitList: FC<BenefitListProps> = ({
  benefitsList,
  className,
  cardClassName,
}) => (
  <div
    className={twMerge(
      'grid grid-flow-col grid-rows-1 grid-cols-3 w-full h-fit gap-8',
      className
    )}
  >
    {benefitsList.map(({ icon, text, title }, index) => (
      <Card
        icon={icon}
        text={text}
        title={title}
        key={index}
        className={cardClassName}
      />
    ))}
  </div>
);
