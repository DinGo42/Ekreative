import JSONData from './data.json';

export type Blog = {
  id: string;
  category: BlogCategories;
  imageSrc: string;
  imageAlt: string;
  avatarBgColor: string;
  avatarSrc: string;
  avatarAlt: string;
  linkHref: string;
  title: string;
  text: string;
  fullName: string;
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

export const TagDesignCode: Record<Tags, string> = {
  [Tags.DESIGN]: 'border-purple-200 bg-purple-50 text-purple-800',
  [Tags.RESEARCH]: 'border-blue-200 bg-blue-50 text-blue-700',
  [Tags.PRESENTATION]: 'border-pink-200 bg-pink-50 text-pink-700',
  [Tags.PRODUCT]: 'border-light-blue-200 bg-light-blue-50 text-light-blue-700',
  [Tags.SOFTWARE]: 'border-green-200 bg-green-50 text-green-700',
  [Tags.SOFTWARE_ENGINEERING]: 'border-green-200 bg-green-50 text-green-700',
  [Tags.LEADERSHIP]: 'border-purple-200 bg-purple-50 text-purple-700',
  [Tags.MANAGEMENT]: 'border-gray-blue-200 bg-gray-blue-50 text-gray-blue-700',
  [Tags.FRAMEWORKS]: 'border-orange-200 bg-orange-50 text-orange-700',
  [Tags.TOOLS]: 'border-pink-200 bg-pink-50 text-pink-700',
  [Tags.SASS]: 'border-pink-200 bg-pink-50 text-pink-700',
  [Tags.PODCASTS]: 'border-purple-200 bg-purple-50 text-purple-700',
  [Tags.CUSTOMER_SUCCESS]:
    'border-gray-blue-200 bg-gray-blue-50 text-gray-blue-700',
};

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

export const blogData: Blog[] = JSON.parse(JSON.stringify(JSONData));
