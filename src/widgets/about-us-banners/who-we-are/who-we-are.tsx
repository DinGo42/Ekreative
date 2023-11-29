import { FC } from 'react';
import { ComponentWrapper, Image } from '@pr2/shared';

export const WhoWeAreBanner: FC = () => (
  <ComponentWrapper className="flex-col items-start gap-1">
    <div className="flex flex-col w-full bg-[#F4F5F5]">
      <span className="text-ls-2 pl-20 pt-20">Who we are</span>
      <div className="w-full text-bs-1 grid grid-cols-2 gap-x-16 gap-y-4 pl-20 pr-20">
        <span className="text-lg">Goal focussed</span>
        <span className="text-lg">Continuous improvement</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </div>
      <Image
        src={'/about-us/focused-on-goals.jpg'}
        alt="Focused on goals"
        style={{ objectFit: 'cover' }}
        className="w-full h-80 mt-20"
      />
    </div>
  </ComponentWrapper>
);
