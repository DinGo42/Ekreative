import { ComponentWrapper, Image } from '@finsweet/shared';
import { FC } from 'react';

export const MainAboutUsBanner: FC = () => (
  <ComponentWrapper className="max-tabletM:flex-col max-tabletM:gap-20 desktopM:pb-0">
    <div className="flex flex-col w-full h-full text-label-main gap-2">
      <span>About us</span>
      <span className="phoneM:text-h1 text-h3 w-full">
        Our designs solve problems
      </span>
      <span className="text-body-main mt-6 phoneM:w-2/3">
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
