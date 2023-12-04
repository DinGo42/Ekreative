import { ComponentWrapper } from '@finsweet/shared';
import { MainSocialMediaUI } from './main-ui';

export const PortfolioMainBanner = () => (
  <ComponentWrapper className="flex-col text-bs-2 bg-blue-50 gap-1 text-center">
    <span>What we created</span>
    <span className="text-lg mb-5">Our Work Portfolio</span>
    <span className="tabletS_Plus:w-[57%] text-center mb-7">
      We help teams create great digital products by providing them with tools
      and technology to make the design-to-code process universally accessible.
    </span>
    <MainSocialMediaUI />
  </ComponentWrapper>
);
