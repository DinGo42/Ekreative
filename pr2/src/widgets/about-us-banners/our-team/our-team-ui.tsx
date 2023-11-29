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
          className="items-center text-center pl-16 pr-16 pt-12 pb-8 bg-white-1000 group"
          icon={
            <>
              <Image
                src={avatarSRC}
                alt="team"
                className="rounded-full overflow-hidden transition-all duration-700 w-[10rem] h-[10rem]"
                style={{ objectFit: 'cover' }}
              >
                <div
                  style={{
                    background:
                      'linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)',
                  }}
                  className={twMerge(
                    'overflow-hidden duration-700 transition-all flex justify-center gap-3 items-end pb-10 group-hover:translate-y-0 w-40 h-40 translate-y-full'
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
