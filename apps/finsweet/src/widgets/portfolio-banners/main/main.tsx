import { ComponentWrapper } from "@finsweet/shared";
import { MainSocialMediaUI } from "./main-ui";
import { FC } from "react";

export const PortfolioMainBanner: FC = () => (
  <ComponentWrapper className="text-body-secondary flex-col gap-1 bg-blue-50 text-center">
    <span>What we created</span>
    <span className="text-h3 mb-5">Our Work Portfolio</span>
    <span className="tabletSPlus:w-[57%] mb-7 text-center">
      We help teams create great digital products by providing them with tools and technology to make the design-to-code
      process universally accessible.
    </span>
    <MainSocialMediaUI />
  </ComponentWrapper>
);
