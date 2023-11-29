import { ComponentWrapper, Image } from '@pr2/shared';
import { FC } from 'react';

export const MainAboutUsBanner: FC = () => (
  <ComponentWrapper className="gap-60">
    <div className="flex flex-col w-fit h-full text-lb-1 gap-2">
      <span>About us</span>
      <span className="text-2xl">Our designs solve problems</span>
      <span className="text-bs-1 mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </span>
    </div>
    <Image
      src={'/about-us/designers-team.jpg'}
      alt="designers team"
      style={{ objectFit: 'cover' }}
      className="w-full h-80"
    />
  </ComponentWrapper>
);
