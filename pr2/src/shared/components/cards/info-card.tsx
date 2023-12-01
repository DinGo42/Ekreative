import { CSSProperties, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { ComponentWrapper } from '../wrappers';
import { Image } from '../image';

export type InfoCardProps = {
  leftImagePossition?: boolean;
  cardName: string;
  imageSrc: string;
  imageAlt: string;
  imageStyle?: CSSProperties;
  imageClassName?: string;
  cardClassName?: string;
  cardNameClassName?: string;
  cardTitleClassName?: string;
  cardTextClassName?: string;
  cardTextSpaceClassName?: string;
  cardTitle: string;
  cardText: string;
};

export const InfoCard: FC<InfoCardProps> = ({
  cardName,
  cardText,
  cardClassName,
  cardNameClassName,
  cardTextClassName,
  cardTextSpaceClassName,
  cardTitleClassName,
  imageAlt,
  imageClassName,
  imageStyle,
  imageSrc,
  cardTitle,
  leftImagePossition,
}) => (
  <ComponentWrapper
    className={twMerge(
      'bg-blue-50',
      cardClassName,
      leftImagePossition ? 'flex-row-reverse' : 'flex-row'
    )}
  >
    <div
      className={twMerge(
        'flex flex-col w-fit h-full gap-4 mt-14',
        cardTextSpaceClassName
      )}
    >
      <span className={twMerge(cardNameClassName, 'text-lb-1')}>
        {cardName}
      </span>
      <span className={twMerge('text-lg', cardTitleClassName)}>
        {cardTitle}
      </span>
      <span className={twMerge('text-bs-1', cardTextClassName)}>
        {cardText}
      </span>
    </div>
    <Image
      src={imageSrc}
      alt={imageAlt}
      style={{ objectFit: 'cover', ...imageStyle }}
      className={twMerge('w-fit h-96', imageClassName)}
    />
  </ComponentWrapper>
);
