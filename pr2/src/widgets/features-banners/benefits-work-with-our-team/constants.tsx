import { ClientsIcon, CustomizationIcon, TabletIcon } from '@finsweet/icons';
import { InfoCardProps } from '@finsweet/shared';

export const benefitsWorkWithOurTeamCard: InfoCardProps[] = [
  {
    cardClassName: 'bg-white-1000',
    cardTextSpaceClassName: 'gap-4 w-[45%]',
    imageClassName: 'w-[45%] h-[398px]',
    cardName: 'Free Revision Rounds',
    cardTitle: 'Top agencies and freelancers around the world use Client‑first',
    cardText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
    imageSrc: '/features-benefits/client-first.jpg',
    imageAlt: 'client-first',
    leftImagePossition: false,
  },
  {
    cardTextSpaceClassName: 'gap-4 w-[49%]',
    imageClassName: 'w-[45%] h-[398px]',
    cardName: 'Free Revision Rounds',
    cardTitle: 'Get free Revisions and one week of free maintenance',
    cardText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
    imageSrc: '/features-benefits/revision.jpg',
    imageAlt: 'Revision',
    leftImagePossition: true,
  },
  {
    cardClassName: 'bg-white-1000',
    cardTextSpaceClassName: 'gap-4 w-[45%]',
    imageClassName: 'w-[45%] h-[398px]',
    cardName: '24/7 Support',
    cardTitle: 'Working with us, you will be getting 24/7 priority support',
    cardText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
    imageSrc: '/features-benefits/all-time-support.jpg',
    imageAlt: 'All-time-support',
    leftImagePossition: false,
  },
  {
    cardClassName: 'gap-20 bg-[#fcd98030]',
    cardTextSpaceClassName: 'gap-4 w-[49%]',
    imageClassName: 'w-[45%] h-[398px]',
    cardName: 'Quick Delivery',
    cardTitle: 'Guranteed 1 week delivery for standard five pager website',
    cardText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
    imageSrc: '/features-benefits/quick-deliveri.jpg',
    imageAlt: 'Quick-deliveri',
    leftImagePossition: true,
  },
];

export const reasonWorkWithOurTeam = [
  {
    icon: <TabletIcon />,
    title: 'Customize with ease',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
  },
  {
    icon: <CustomizationIcon />,
    title: 'Perfectly Responsive',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
  },
  {
    icon: <ClientsIcon />,
    title: 'Friendly Support',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
  },
];
