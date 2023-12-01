import { Routs } from '@pr2/shared';

type ourTeamType = {
  avatarSRC: string;
  fullName: string;
  possotion: string;
  facebookLink: Routs;
  twetterLink: Routs;
  linkeIn: Routs;
};

export const ourTeam: ourTeamType[] = [
  {
    avatarSRC: '/our-team/john-smith.jpg',
    fullName: 'John Smith',
    possotion: 'CEO',
    facebookLink: Routs.HOME,
    twetterLink: Routs.HOME,
    linkeIn: Routs.HOME,
  },
  {
    avatarSRC: '/our-team/simon-adams.jpg',
    fullName: 'Simon Adams',
    possotion: 'CTO',
    facebookLink: Routs.HOME,
    twetterLink: Routs.HOME,
    linkeIn: Routs.HOME,
  },
  {
    avatarSRC: '/our-team/paul-jones.jpg',
    fullName: 'Paul Jones',
    possotion: 'Design Lead',
    facebookLink: Routs.HOME,
    twetterLink: Routs.HOME,
    linkeIn: Routs.HOME,
  },
  {
    avatarSRC: '/our-team/sara-hardin.jpg',
    fullName: 'Sara Hardin',
    possotion: 'Project Manager',
    facebookLink: Routs.HOME,
    twetterLink: Routs.HOME,
    linkeIn: Routs.HOME,
  },
];
