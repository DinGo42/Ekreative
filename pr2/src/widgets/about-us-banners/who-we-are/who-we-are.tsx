import { FC } from 'react';
import { ComponentWrapper, Image } from '@pr2/shared';

export const WhoWeAreBanner: FC = () => (
  <ComponentWrapper className="flex-col items-start gap-1 h-fit max-phoneM:pl-0 max-phoneM:pr-0">
    <div className="flex flex-col w-full bg-[#F4F5F5]">
      <span className="text-ls-2 phoneSPlus:pl-20 pt-20 pl-10">Who we are</span>
      <div className="w-full h-fit text-bs-1 grid tabletM:grid-cols-2 grid-cols-1 gap-16 phoneSPlus:pl-20 phoneSPlus:pr-20 pl-10 pr-10">
        <div className="flex flex-col gap-4">
          <span className="text-lg">Goal focussed</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-lg">Continuous improvement</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </div>
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
