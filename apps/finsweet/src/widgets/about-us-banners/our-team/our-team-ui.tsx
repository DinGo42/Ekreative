"use client";
import { Card, Image } from "@finsweet/shared";
import { ourTeam } from "./constants";
import { SocialMedia } from "./social-media";
import { twMerge } from "tailwind-merge";
import { FC } from "react";

export const OurTeamUI: FC = () => (
  <>
    {ourTeam.map(({ avatarSRC, fullName, position: position, facebookLink, linkedIn, twitterLink }, index) => (
      <Card
        text={position}
        title={fullName}
        titleClassName="text-h6"
        className="bg-white-1000 items-center whitespace-nowrap pb-8 pl-11 pr-11 pt-12 text-center"
        icon={
          <Image
            src={avatarSRC}
            alt="team"
            className="group h-[10rem] w-[10rem] overflow-hidden rounded-full transition-all duration-700"
            style={{
              objectFit: "cover",
            }}
          >
            <div
              className={twMerge(
                "flex h-40 w-40 translate-y-full items-end justify-center gap-3 overflow-hidden bg-[linear-gradient(348.37deg,_#5239FA_10.97%,_#ffffff00_60.2%)] pb-10 transition-all duration-700 group-hover:translate-y-0",
              )}
            >
              <SocialMedia facebook={facebookLink} twitter={twitterLink} linkedIn={linkedIn} />
            </div>
          </Image>
        }
        key={index}
      />
    ))}
  </>
);
