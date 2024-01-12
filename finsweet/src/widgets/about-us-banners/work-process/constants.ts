import { InfoCardProps } from '@finsweet/shared';

export const ourMovementDirection: InfoCardProps[] = [
  {
    cardClassName: 'bg-azure-1000 desktopM:pb-28',
    cardTextClassName: 'tabletSPlus:w-4/5 text-opacity-70',
    cardTextSpaceClassName: 'gap-4 mt-14 w-full',
    imageClassName: 'phoneM:w-[68%] w-full h-80 ',
    cardName: 'Our mission',
    cardTitle: 'Inspire, Innovate, Share',
    cardText: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.`,
    imageSrc: '/about-us/our-mission.jpg',
    imageAlt: 'aour mission',
    leftImagePosition: false,
  },
  {
    cardTitleClassName: 'pl-6',
    cardClassName: 'bg-azure-1000 desktopM:pt-0 ',
    cardTextSpaceClassName: 'gap-4 tabletSPlus:w-[49%] w-full',
    cardTextClassName: 'pl-6 text-opacity-70',
    imageClassName: 'tabletSPlus:w-[41%] w-full h-80',
    cardName: 'Our Vision',
    cardTitle: 'Laser focus',
    cardText: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.`,
    imageSrc: '/about-us/team-vision.jpg',
    imageAlt: 'team vision',
    leftImagePosition: true,
  },
];
