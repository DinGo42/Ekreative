import { ClientsIcon, CustomizationIcon, TabletIcon } from '@pr2/icons';
import { BenefitListProps } from '@pr2/shared';

export const reasonWorkWithUs: BenefitListProps['benefitsList'] = [
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
