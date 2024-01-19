import { ComponentWrapper, Image } from "@finsweet/shared";
import { FC } from "react";

export const MainAboutUsBanner: FC = () => (
  <ComponentWrapper className="max-tabletM:flex-col max-tabletM:gap-20 desktopM:pb-0">
    <div className="flex h-full w-full flex-col gap-2 text-label-main">
      <span>About us</span>
      <span className="w-full text-h3 phoneM:text-h1">Our designs solve problems</span>
      <span className="mt-6 text-body-main phoneM:w-2/3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </span>
    </div>
    <Image
      src={"/about-us/designers-team.jpg"}
      alt="designers team"
      style={{ objectFit: "cover" }}
      className="h-80 w-full tabletS:w-[75%]"
    />
  </ComponentWrapper>
);
