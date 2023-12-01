import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@pr2/icons';
import { Link, Routs } from '@pr2/shared';
import { Colors } from '@pr2/tailwindConfig';

import { FC } from 'react';

export const MainSocialMediaUI: FC = () => (
  <div className="flex gap-7">
    <Link href={Routs.HOME}>
      <FacebookIcon fill={Colors['blue-1000']} />
    </Link>
    <Link href={Routs.HOME}>
      <TwitterIcon fill={Colors['blue-1000']} />
    </Link>
    <Link href={Routs.HOME}>
      <InstagramIcon fill={Colors['blue-1000']} />
    </Link>
    <Link href={Routs.HOME}>
      <LinkedInIcon fill={Colors['blue-1000']} />
    </Link>
  </div>
);
