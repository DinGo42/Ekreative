'use client';
import { Link } from '@pr2/shared';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../../../public/svgs';
import { FC } from 'react';

export const CompanySocialMedia: FC = () => (
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
