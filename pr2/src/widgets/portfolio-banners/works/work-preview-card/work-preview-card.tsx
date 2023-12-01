'use client';
import { Image, Link, Routs } from '@pr2/shared';
import { Colors } from '@pr2/tailwindConfig';
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
        'w-full h-96 pl-10 pr-10 pt-8 pb-8 mb-3',
        imageBgClassName
      )}
    >
      <Image src={imageSrc} alt={imageAlt} style={{ objectFit: 'fill' }} />
    </div>
    <span className="text-xl">{name}</span>
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
