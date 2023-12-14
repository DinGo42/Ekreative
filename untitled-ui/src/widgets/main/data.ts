import JSONData from './data.json';

export type Blog = {
  categoty: CategoriesTypes;
  imageSrc: string;
  imageAlt: string;
  avatarBgColor: string;
  avatarSrc: string;
  avatarAlt: string;
  id: string;
  title: string;
  text: string;
  fullname: string;
  publication: Date;
};
export enum CategoriesTypes {
  DESIGN = 'Design',
  PRODUCT = 'Product',
  SOFTWARE_ENGINEERING = 'Software Engineering',
  CUSTOMER_SUCCESS = 'Customer Success',
}

export enum Filters { ///sort by date  DateSortOptions
  LATEST_BY_DATE = 'Most recent',
  OLDEST_BY_DATE = 'The oldest',
}
export const Categories = {
  ALL: 'View all',
  ...CategoriesTypes,
} as const;

type Categories = typeof Categories;
export type CategoriesValues = Categories[keyof Categories];

export const blogsData: Blog[] = JSON.parse(JSON.stringify(JSONData));
