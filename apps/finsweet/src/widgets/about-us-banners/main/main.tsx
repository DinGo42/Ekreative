import { ComponentWrapper, Image } from "@finsweet/shared";
import { FC } from "react";

export const MainAboutUsBanner: FC = () => (
  <ComponentWrapper className="max-tabletM:flex-col max-tabletM:gap-20 desktopM:pb-0">
    <div className="text-label-main flex h-full w-full flex-col gap-2">
      <span>About us</span>
      <span className="text-h3 phoneM:text-h1 w-full">Our designs solve problems</span>
      <span className="text-body-main phoneM:w-2/3 mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </span>
    </div>
    <Image
      src={"/about-us/designers-team.jpg"}
      alt="designers team"
      style={{ objectFit: "cover" }}
      className="tabletS:w-[75%] h-80 w-full"
    />
  </ComponentWrapper>
);
