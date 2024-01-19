import { FC } from "react";
import { ComponentWrapper, Image } from "@finsweet/shared";

export const WhoWeAreBanner: FC = () => (
  <ComponentWrapper className="h-fit flex-col items-start gap-1 max-phoneM:pl-0 max-phoneM:pr-0">
    <div className="flex w-full flex-col bg-[#F4F5F5]">
      <span className="text-ls-2 pl-10 pt-20 phoneSPlus:pl-20">Who we are</span>
      <div className="grid h-fit w-full grid-cols-1 gap-16 pl-10 pr-10 text-body-main phoneSPlus:pl-20 phoneSPlus:pr-20 tabletM:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="text-h3">Goal focussed</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-h3">Continuous improvement</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </span>
        </div>
      </div>
      <Image
        src={"/about-us/focused-on-goals.jpg"}
        alt="Focused on goals"
        style={{ objectFit: "cover" }}
        className="mt-20 h-80 w-full"
      />
    </div>
  </ComponentWrapper>
);
