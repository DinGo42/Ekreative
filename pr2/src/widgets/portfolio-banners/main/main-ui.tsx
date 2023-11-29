'use client';
import { Link } from '@pr2/shared';

import { FC } from 'react';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from '../../../../public';

export const MainSocialMediaUI: FC = () => (
  <>
    <Link href={'#'}>
      <FacebookIcon />
    </Link>
    <Link href={'#'}>
      <TwitterIcon />
    </Link>
    <Link href={'#'}>
      <InstagramIcon />
    </Link>
    <Link href={'#'}>
      <LinkedInIcon />
    </Link>
  </>
);
