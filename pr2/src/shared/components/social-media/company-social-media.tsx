'use client';

import { FC } from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@pr2/icons';
import { Link } from '../links';
import { Routs } from '@pr2/shared';

export const CompanySocialMedia: FC = () => (
  <>
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
  </>
);
