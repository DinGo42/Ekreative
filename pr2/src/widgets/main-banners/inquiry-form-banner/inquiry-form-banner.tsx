import { ComponentWrapper, Image } from '@pr2/shared';
import { FC } from 'react';
import { InquiryFrom } from './form';

export const InquiryFormBanner: FC = () => (
  <ComponentWrapper className="w-full h-fit pt-24 pb-24 max-tabletS:pl-0 max-tabletS:pr-0">
    <div className="w-full h-full relative bg-yellow-90 max-dectopM:hidden">
      <Image
        alt="looking busy"
        src={'/inquiry-form/bg.jpg'}
        className="h-[692px]"
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute flex left-0 top-0 flex-col h-full p-24 text-white-1000 gap-6 bg-[#1c1e5380]">
        <span className="text-2xl">
          Building stellar websites for early startups
        </span>
        <span className="w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
        </span>
      </div>
    </div>

    <div className="flex flex-col text-lb-2 dectopM:w-[80%] w-full bg-blue-900  h-[692px] text-white-1000 phoneM:p-24 p-5 pb-12 gap-4">
      <span className="text-sm">Send inquiry</span>
      <span className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </span>
      <InquiryFrom />
    </div>
  </ComponentWrapper>
);
