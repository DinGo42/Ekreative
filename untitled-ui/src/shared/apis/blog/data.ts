import JSONData from './data.json';

export type Blog = {
  categoty: BlogCategories;
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
  tags: Tags[];
};

export enum Tags {
  DESIGN = 'Design',
  RESEARCH = 'Research',
  PRESENTATION = 'Presentation',
  PRODUCT = 'Product',
  SOFTWARE = 'Software',
  SOFTWARE_ENGINEERING = 'Software Engineering',
  LEADERSHIP = 'Leadership',
  MANAGEMENT = 'Management',
  FRAMEWORKS = 'Frameworks',
  TOOLS = 'Tools',
  SASS = 'SasS',
  PODCASTS = 'Podcasts',
  CUSTOMER_SUCCESS = 'Customer Success',
}
export enum BlogCategories {
  DESIGN = 'Design',
  PRODUCT = 'Product',
  SOFTWARE_ENGINEERING = 'Software Engineering',
  CUSTOMER_SUCCESS = 'Customer Success',
}

export enum SortOptions {
  RECENT_BY_DATE = 'Recent',
  OLDEST_BY_DATE = 'The oldest',
  BY_ALPHABET = 'By alphabet',
}
export const Categories = {
  ALL: 'View all',
  ...BlogCategories,
} as const;

type Categories = typeof Categories;
export type CategoriesValues = Categories[keyof Categories];

export const blogsData: Blog[] = JSON.parse(JSON.stringify(JSONData));
