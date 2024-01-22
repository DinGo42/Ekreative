import { ComponentWrapper, Image } from "@finsweet/shared";
import { FC } from "react";
import { InquiryFrom } from "./form";

export const InquiryFormBanner: FC = () => (
  <ComponentWrapper className="max-tabletS:pl-0 max-tabletS:pr-0 h-fit w-full pb-24 pt-24">
    <div className="bg-yellow-90 max-desktopM:hidden relative h-full w-full">
      <Image alt="looking busy" src={"/inquiry-form/bg.jpg"} className="h-[692px]" style={{ objectFit: "cover" }} />
      <div className="text-white-1000 absolute left-0 top-0 flex h-full flex-col gap-6 bg-[#1c1e5380] p-24">
        <span className="text-h1">Building stellar websites for early startups</span>
        <span className="w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua ut enim.
        </span>
      </div>
    </div>

    <div className="text-label-secondary text-white-1000 phoneM:p-24 desktopM:w-[80%] flex h-[692px]  w-full flex-col gap-4 bg-blue-900 p-5 pb-12">
      <span className="text-h5">Send inquiry</span>
      <span className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </span>
      <InquiryFrom />
    </div>
  </ComponentWrapper>
);
