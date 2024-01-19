"use client";
import { Image, Link, Routs } from "@finsweet/shared";
import { Colors } from "@finsweet/tailwindConfig";
import { FC } from "react";
import { twJoin } from "tailwind-merge";

export type WorkPreviewCardProps = {
  imageBgClassName: string;
  name: string;
  description: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
};

export const WorkPreviewCard: FC<WorkPreviewCardProps> = ({
  imageBgClassName,
  description,
  imageSrc,
  linkHref,
  name,
  imageAlt,
}) => (
  <div className="flex h-fit w-full flex-col gap-3">
    <div
      className={twJoin(
        "tabletS:2/3 mb-3 h-96 w-full pb-4 pl-5 pr-5 pt-4 max-phoneSPlus:hidden tabletS:pb-8 tabletS:pl-10 tabletS:pr-10 tabletS:pt-8",
        imageBgClassName,
      )}
    >
      <Image src={imageSrc} alt={imageAlt} style={{ objectFit: "fill" }} />
    </div>
    <span className="text-h2 max-phoneSPlus:text-center">{name}</span>
    <span className="mb-3 text-body-main">{description}</span>
    <Link href={Routs.PORTFOLIO + linkHref} arrowColor={Colors["blue-1000"]} className="text-label-secondary">
      View portfolio
    </Link>
  </div>
);
