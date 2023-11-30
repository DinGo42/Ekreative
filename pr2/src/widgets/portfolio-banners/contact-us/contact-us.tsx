import { ComponentWrapper, Link } from '@pr2/shared';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type PortfolioContactUsBannerProps = {
  className?: string;
};
export const PortfolioContactUsBanner: FC<PortfolioContactUsBannerProps> = ({
  className,
}) => (
  <ComponentWrapper
    className={twMerge(
      'flex flex-col items-center text-center gap-5 pt-0',
      className
    )}
  >
    <span className="text-xl">
      Let`s build something great
      <br />
      together
    </span>
    <span className="text-bs-2 mb-5">
      Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies
      nec <br /> dolor sit amet, scelerisque cursus purus.
    </span>
    <Link
      href={'/contact-us'}
      className="text-lb-1 p-4 pl-16 pr-16 bg-yellow-90 rounded-4xl text-[#1B1C2A] hover:text-[#1B1C2B] hover:bg-[#FDE4A6]"
    >
      Contact us
    </Link>
  </ComponentWrapper>
);
