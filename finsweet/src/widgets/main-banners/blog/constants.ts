import { Routs } from '@finsweet/shared';
import { BlogItemProps } from './blog-item';

export const blogs: BlogItemProps[] = [
  {
    date: new Date(2022, 0, 19),
    description:
      'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    imageSrc: '/blog/busy_man.jpg',
    linkHref: Routs.BLOG,
    title:
      'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
  },
  {
    date: new Date(2022, 0, 19),
    description:
      'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    imageSrc: '/blog/busy_female.jpg',
    linkHref: Routs.BLOG,
    title:
      'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
  },
  {
    date: new Date(2022, 0, 19),
    description:
      'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    imageSrc: '/blog/pc.jpg',
    linkHref: Routs.BLOG,
    title:
      'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
  },
];
