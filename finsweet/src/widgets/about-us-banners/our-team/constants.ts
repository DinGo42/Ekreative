import { Routs } from '@finsweet/shared';

type ourTeamType = {
  avatarSRC: string;
  fullName: string;
  position: string;
  facebookLink: Routs;
  twitterLink: Routs;
  linkedIn: Routs;
};

export const ourTeam: ourTeamType[] = [
  {
    avatarSRC: '/our-team/john-smith.jpg',
    fullName: 'John Smith',
    position: 'CEO',
    facebookLink: Routs.HOME,
    twitterLink: Routs.HOME,
    linkedIn: Routs.HOME,
  },
  {
    avatarSRC: '/our-team/simon-adams.jpg',
    fullName: 'Simon Adams',
    position: 'CTO',
    facebookLink: Routs.HOME,
    twitterLink: Routs.HOME,
    linkedIn: Routs.HOME,
  },
  {
    avatarSRC: '/our-team/paul-jones.jpg',
    fullName: 'Paul Jones',
    position: 'Design Lead',
    facebookLink: Routs.HOME,
    twitterLink: Routs.HOME,
    linkedIn: Routs.HOME,
  },
  {
    avatarSRC: '/our-team/sara-hardin.jpg',
    fullName: 'Sara Hardin',
    position: 'Project Manager',
    facebookLink: Routs.HOME,
    twitterLink: Routs.HOME,
    linkedIn: Routs.HOME,
  },
];
