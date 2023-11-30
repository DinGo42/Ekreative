import { ComponentWrapper, Image } from '@pr2/shared';
import { FC } from 'react';
import { InquiryFrom } from './form';

export const InquiryFormBanner: FC = () => (
  <ComponentWrapper className="w-full h-visible-screen pt-24 pb-24">
    <div className="w-full h-full relative bg-blue-900">
      <Image
        alt="looking busy"
        src={'/inquiry-form/bg.jpg'}
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute flex left-0 top-0 flex-col h-full p-24 text-white-1000 gap-6 bg-[#1c1e5380]">
        <span className="text-2xl">
          Building stellar websites for early startups
        </span>
        <span className="w-[90%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
        </span>
      </div>
    </div>

    <div className="flex flex-col text-lb-2 w-full bg-blue-900 h-full text-white-1000 p-24 gap-4">
      <span className="text-sm">Send inquiry</span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </span>
      <InquiryFrom />
    </div>
  </ComponentWrapper>
);
