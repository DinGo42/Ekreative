import { Constacts } from './contacts';
import { FC } from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LogoIcon,
  TwitterIcon,
} from '@pr2/icons';
import { ComponentWrapper } from '../wrappers';
import { Link, NavigationLinks } from '../links';
import { LinkStyleTypes, Routs } from '@pr2/shared';

export const Footer: FC = () => (
  <footer className="flex text-bs-2 flex-col bg-blue-900">
    <ComponentWrapper className="text-white-1000 pt-0 pb-0 tabletS:pb-0 dectopM:pb-0 max-tabletS:hidden">
      <div className="flex flex-col gap-6">
        <LogoIcon />
        <span className="text-lb-2 tabletS:w-4/6 w-5/6">
          We are always open to discuss your project and improve your online
          presence.
        </span>
      </div>
      <div className="flex flex-col gap-4 dectopS:w-1/4 w-2/4 max-tabletM:hidden">
        <span className="text-xl">Lets Talk!</span>
        <span className="text-bs-1">
          We are always open to discuss your project, improve your online
          presence and help with your UX/UI design challenges.
        </span>
        <div className="flex gap-6">
          <Link href={Routs.HOME}>
            <FacebookIcon />
          </Link>
          <Link href={Routs.HOME}>
            <TwitterIcon />
          </Link>
          <Link href={Routs.HOME}>
            <InstagramIcon />
          </Link>
          <Link href={Routs.HOME}>
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </ComponentWrapper>
    <Constacts />
    <ComponentWrapper className="w-full justify-between pb-7 pt-7 tabletS:pt-7 tabletS:pb-7 dectopM:pt-7 dectopM:pb-7  bg-blue-50">
      <span>Copyright 2021, Finsweet.com</span>
      <div className="flex tabletM:gap-8 gap-4 max-tabletS_Plus:hidden">
        <NavigationLinks navigationLinksStyleType={LinkStyleTypes.SECONDARY} />
      </div>
    </ComponentWrapper>
  </footer>
);
