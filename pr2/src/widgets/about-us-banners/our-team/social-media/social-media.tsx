'use client';
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '@finsweet/icons';
import { Link } from '@finsweet/shared';
import { FC } from 'react';

type SocialMediaProps = {
  facebook: string;
  twetter: string;
  linkedIn: string;
};

export const SocialMedia: FC<SocialMediaProps> = ({
  facebook,
  linkedIn,
  twetter,
}) => (
  <>
    <Link href={facebook}>
      <FacebookIcon />
    </Link>
    <Link href={twetter}>
      <TwitterIcon />
    </Link>
    <Link href={linkedIn}>
      <LinkedInIcon />
    </Link>
  </>
);
