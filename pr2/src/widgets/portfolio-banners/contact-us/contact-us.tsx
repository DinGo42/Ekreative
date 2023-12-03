import { ComponentWrapper, Link, Routs } from '@pr2/shared';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type PortfolioContactUsBannerProps = {
  className?: string;
  titleClassName?: string;
  textClassName?: string;
};
export const PortfolioContactUsBanner: FC<PortfolioContactUsBannerProps> = ({
  className,
  textClassName,
  titleClassName,
}) => (
  <ComponentWrapper
    className={twMerge(
      'flex flex-col items-center text-center gap-5 pt-0',
      className
    )}
  >
    <span className={twMerge('text-xl tabletS_Plus:w-2/3', titleClassName)}>
      Let`s build something great together
    </span>
    <span
      className={twMerge('text-bs-2 mb-5 tabletS_Plus:w-[45%]', textClassName)}
    >
      Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies
      nec dolor sit amet, scelerisque cursus purus.
    </span>
    <Link
      href={Routs.CONTACT_US}
      className="text-lb-1 p-4 pl-16 pr-16 bg-yellow-90 rounded-4xl text-blue-400 hover:text-blue-950 hover:bg-yellow-200"
    >
      Contact us
    </Link>
  </ComponentWrapper>
);
