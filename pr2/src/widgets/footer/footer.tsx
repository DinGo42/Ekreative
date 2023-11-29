import {
  ComponentWrapper,
  LinksStyleTypes,
  NavigationLinks,
} from '@pr2/shared';
import { LogoIcon } from '../../../public';

import { Constacts } from './contacts';
import { FC } from 'react';
import { SocialMediaUI } from './social-media-ui';

export const Footer: FC = () => (
  <footer className="flex text-bs-2 flex-col bg-blue-900">
    <ComponentWrapper className="text-white-1000 pt-0 pb-0">
      <div className="flex flex-col gap-6">
        <LogoIcon />
        <span className="text-lb-2 w-4/6">
          We are always open to discuss your project and improve your online
          presence.
        </span>
      </div>
      <div className="flex flex-col gap-4 w-1/4">
        <span className="text-xl">Lets Talk!</span>
        <span className="text-bs-1">
          We are always open to discuss your project, improve your online
          presence and help with your UX/UI design challenges.
        </span>
        <div className="flex gap-6">
          <SocialMediaUI />
        </div>
      </div>
    </ComponentWrapper>
    <Constacts />
    <ComponentWrapper className="w-full justify-between pb-7 pt-7 bg-blue-50">
      <span>Copyright 2021, Finsweet.com</span>
      <div className="flex gap-8">
        <NavigationLinks navigationLinksStyleType={LinksStyleTypes.SECONDARY} />
      </div>
    </ComponentWrapper>
  </footer>
);
