import { Routs } from '@pr2/shared';
import { DropDown } from '../dropdown';
import { ComponentWrapper } from '../wrappers';
import { Link } from '../links';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

export type FAQProps = {
  title: string;
  className?: string;
  titleClassName?: string;
  textSpaceClassName?: string;
  faqList: { question: string; answer: string }[];
};

export const FAQ: FC<FAQProps> = ({
  faqList,
  title,
  titleClassName,
  textSpaceClassName,
  className,
}) => (
  <ComponentWrapper
    className={twMerge('items-start justify-between', className)}
  >
    <div className={twMerge('flex flex-col gap-4 w-[25%]', textSpaceClassName)}>
      <span className={twMerge('text-lg', titleClassName)}>{title}</span>
      <Link
        href={Routs.CONTACT_US}
        className="text-lb-1 text-blue-700 text-opacity-90"
      >
        Contact us for more info
      </Link>
    </div>
    <div className="flex flex-col w-[66%] h-fit -mt-10">
      {faqList.map((item, index) => (
        <DropDown {...item} index={index + 1} key={index} />
      ))}
    </div>
  </ComponentWrapper>
);
