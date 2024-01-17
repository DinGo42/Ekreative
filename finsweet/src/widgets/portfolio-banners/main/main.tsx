import { ComponentWrapper } from "@finsweet/shared";
import { MainSocialMediaUI } from "./main-ui";
import { FC } from "react";

export const PortfolioMainBanner: FC = () => (
  <ComponentWrapper className="flex-col gap-1 bg-blue-50 text-center text-body-secondary">
    <span>What we created</span>
    <span className="mb-5 text-h3">Our Work Portfolio</span>
    <span className="mb-7 text-center tabletSPlus:w-[57%]">
      We help teams create great digital products by providing them with tools and technology to make the design-to-code
      process universally accessible.
    </span>
    <MainSocialMediaUI />
  </ComponentWrapper>
);
