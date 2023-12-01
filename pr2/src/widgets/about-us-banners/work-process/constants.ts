import { InfoCardProps } from '@pr2/shared';

export const ourMovementDirection: InfoCardProps[] = [
  {
    cardTitleClassName: 'text-lb-2',
    cardClassName: 'bg-azure-1000 pb-12',
    cardTextClassName: 'w-4/5',
    cardTextSpaceClassName: 'gap-4 mt-14 w-full',
    imageClassName: 'w-[68%] h-80',
    cardName: 'Our mission',
    cardTitle: 'Inspire, Innovate, Share',
    cardText: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.`,
    imageSrc: '/about-us/our-mission.jpg',
    imageAlt: 'aour mission',
    leftImagePossition: false,
  },
  {
    cardTitleClassName: 'text-lb-2 pl-6',
    cardClassName: 'bg-azure-1000 pt-12',
    cardTextSpaceClassName: 'gap-4 w-[49%]',
    cardTextClassName: 'pl-6',
    imageClassName: 'w-[41%] h-80',
    cardName: 'Our Vision',
    cardTitle: 'Laser focus',
    cardText: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.`,
    imageSrc: '/about-us/team-vision.jpg',
    imageAlt: 'team vision',
    leftImagePossition: true,
  },
];
