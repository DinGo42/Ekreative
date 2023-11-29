'use client';
import { FC } from 'react';
import { Button, ButtonStyleTypes } from './button';
import { Link, LinksStyleTypes } from './link';

type NavigationLinksProps = {
  navigationLinksStyleType?: LinksStyleTypes;
  contactUsButton?: boolean;
};

export const NavigationLinks: FC<NavigationLinksProps> = ({
  navigationLinksStyleType = LinksStyleTypes.MAIN,
  contactUsButton = false,
}) => (
  <>
    <Link href={'#'} styleType={navigationLinksStyleType}>
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
      <Button styleType={ButtonStyleTypes.ROUNDED} className="ml-4">
        Contact us
      </Button>
    )}
  </>
);
