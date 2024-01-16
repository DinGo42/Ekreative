'use client';
import { Card, Image } from '@finsweet/shared';
import { ourTeam } from './constants';
import { SocialMedia } from './social-media';
import { twMerge } from 'tailwind-merge';
import { FC } from 'react';

export const OurTeamUI: FC = () => (
  <>
    {ourTeam.map(
      (
        {
          avatarSRC,
          fullName,
          position: position,
          facebookLink,
          linkedIn,
          twitterLink,
        },
        index
      ) => (
        <Card
          text={position}
          title={fullName}
          titleClassName="text-h6"
          className="items-center text-center pl-11 pr-11 pt-12 pb-8 bg-white-1000 whitespace-nowrap"
          icon={
            <Image
              src={avatarSRC}
              alt="team"
              className="rounded-full overflow-hidden transition-all duration-700 w-[10rem] h-[10rem] group"
              style={{ objectFit: 'cover' }}
            >
              <div
                className={twMerge(
                  'overflow-hidden duration-700 transition-all flex justify-center gap-3 items-end pb-10 group-hover:translate-y-0 w-40 h-40 translate-y-full bg-[linear-gradient(348.37deg,_#5239FA_10.97%,_#ffffff00_60.2%)]'
                )}
              >
                <SocialMedia
                  facebook={facebookLink}
                  twitter={twitterLink}
                  linkedIn={linkedIn}
                />
              </div>
            </Image>
          }
          key={index}
        />
      )
    )}
  </>
);
