'use client';
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '@finsweet/icons';
import { Link } from '@finsweet/shared';
import { FC } from 'react';

type SocialMediaProps = {
  facebook: string;
  twitter: string;
  linkedIn: string;
};

export const SocialMedia: FC<SocialMediaProps> = ({
  facebook,
  linkedIn,
  twitter,
}) => (
  <>
    <Link href={facebook}>
      <FacebookIcon />
    </Link>
    <Link href={twitter}>
      <TwitterIcon />
    </Link>
    <Link href={linkedIn}>
      <LinkedInIcon />
    </Link>
  </>
);
