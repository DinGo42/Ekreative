import { FC } from 'react';
import { Link } from './link';
import { LinkStyleTypes } from '../constants';

type NavigationLinksProps = {
  navigationLinksStyleType?: LinkStyleTypes;
  contactUsButton?: boolean;
};

export const NavigationLinks: FC<NavigationLinksProps> = ({
  navigationLinksStyleType = LinkStyleTypes.MAIN,
  contactUsButton = false,
}) => (
  <>
    <Link href={'/'} styleType={navigationLinksStyleType}>
      Home
    </Link>
    <Link styleType={navigationLinksStyleType} href={'/about-us'}>
      About us
    </Link>
    <Link styleType={navigationLinksStyleType} href={'/features'}>
      Features
    </Link>
    <Link styleType={navigationLinksStyleType} href={'/pricing'}>
      Pricing
    </Link>
    <Link styleType={navigationLinksStyleType} href={'/FAQ'}>
      FAQ
    </Link>
    <Link styleType={navigationLinksStyleType} href={'/blog'}>
      Blog
    </Link>
    {contactUsButton && (
      <Link
        href={'/contact-us'}
        className="ml-4 p-3 pl-9 pr-9 border-blue-200 border-2 rounded-4xl hover:bg-[#535460]"
      >
        Contact us
      </Link>
    )}
  </>
);
