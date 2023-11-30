import { Link } from '@pr2/shared';

import { FC } from 'react';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from '../../../../public';

export const MainSocialMediaUI: FC = () => (
  <div className="flex gap-7">
    <Link href={'/'}>
      <FacebookIcon fill={'#282938'} />
    </Link>
    <Link href={'/'}>
      <TwitterIcon fill={'#282938'} />
    </Link>
    <Link href={'/'}>
      <InstagramIcon fill={'#282938'} />
    </Link>
    <Link href={'/'}>
      <LinkedInIcon fill={'#282938'} />
    </Link>
  </div>
);
