'use client';
import { Card, Image } from '@pr2/shared';
import { ourTeam } from './constants';
import { SocialMedia } from './social-media';
import { twMerge } from 'tailwind-merge';

export const OurTeamUI = () => (
  <>
    {ourTeam.map(
      (
        { avatarSRC, fullName, possotion, facebookLink, linkeIn, twetterLink },
        index
      ) => (
        <Card
          text={possotion}
          title={fullName}
          titleClassName="text-xs"
          className="items-center text-center pl-16 pr-16 pt-12 pb-8 bg-white-1000"
          icon={
            <>
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
                    twetter={twetterLink}
                    linkedIn={linkeIn}
                  />
                </div>
              </Image>
            </>
          }
          key={index}
        />
      )
    )}
  </>
);
