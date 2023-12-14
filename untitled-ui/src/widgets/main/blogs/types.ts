import { CategoriesTypes } from '../data';

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
