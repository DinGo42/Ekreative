import { ComponentWrapper, Image } from '@finsweet/shared';
import { FC } from 'react';

export const MainAboutUsBanner: FC = () => (
  <ComponentWrapper className="max-tabletM:flex-col max-tabletM:gap-20">
    <div className="flex flex-col w-full h-full text-lb-1 gap-2">
      <span>About us</span>
      <span className="phoneM:text-2xl text-lg w-full">
        Our designs solve problems
      </span>
      <span className="text-bs-1 mt-6 phoneM:w-2/3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </span>
    </div>
    <Image
      src={'/about-us/designers-team.jpg'}
      alt="designers team"
      style={{ objectFit: 'cover' }}
      className="tabletS:w-[75%] w-full h-80"
    />
  </ComponentWrapper>
);
