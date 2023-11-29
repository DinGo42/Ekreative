import { ComponentWrapper } from '@pr2/shared';
import { MainSocialMediaUI } from './main-ui';

export const PortfolioMainBanner = () => (
  <ComponentWrapper className="flex-col text-bs-2">
    <span>What we created</span>
    <span className="text-lg">Our Work Portfolio</span>
    <span>
      We help teams create great digital products by providing them with tools
      and technology to make the design-to-code process universally accessible.
    </span>
    <MainSocialMediaUI />
  </ComponentWrapper>
);
