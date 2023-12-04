'use client';
import { Image, Link, Routs } from '@finsweet/shared';
import { Colors } from '@finsweet/tailwindConfig';
import { FC } from 'react';
import { twJoin } from 'tailwind-merge';

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
  <div className="flex flex-col h-fit w-full gap-3">
    <div
      className={twJoin(
        'w-full h-96 tabletS:2/3 tabletS:pl-10 max-phoneSPlus:hidden tabletS:pr-10 tabletS:pt-8 tabletS:pb-8 pl-5 pr-5 pt-4 pb-4 mb-3',
        imageBgClassName
      )}
    >
      <Image src={imageSrc} alt={imageAlt} style={{ objectFit: 'fill' }} />
    </div>
    <span className="text-xl max-phoneSPlus:text-center">{name}</span>
    <span className="text-bs-1 mb-3">{description}</span>
    <Link
      href={Routs.PORTFOLIO + linkHref}
      arrowColor={Colors['blue-1000']}
      className="text-lb-2"
    >
      View portfolio
    </Link>
  </div>
);
