import { FC } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import { Tag } from '..';

export const navigationData = [
  {
    category: 'Product',
    values: [
      'Overview',
      'Features',
      'Solutions',
      'Tutorials',
      'Pricing',
      'Releases',
    ],
  },
  {
    category: 'Company',
    values: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
  },
  {
    category: 'Resources',
    values: [
      'Blog',
      'Newsletter',
      'Events',
      'Help centre',
      'Tutorials',
      'Support',
    ],
  },
  {
    category: 'Use Cases',
    values: [
      'Startups',
      'Enterprise',
      'Government',
      'SaaS centre',
      'Marketplaces',
      'Ecommerce',
    ],
  },
  {
    category: 'Social',
    values: [
      'Twitter',
      'LinkedIn',
      'Facebook',
      'GitHub',
      'AngelList',
      'Dribbble',
    ],
  },
  {
    category: 'Legal',
    values: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'],
  },
];

type CategoriesProps = {
  categoriesArray: { category: string; values?: string[] }[];
  categoryClassName?: string;
  subCategoryClassName?: string;
  tagClassName?: string;
  className?: string;
};

export const Categories: FC<CategoriesProps> = ({
  categoriesArray,
  categoryClassName = 'text-gray-blue-700',
  subCategoryClassName = 'text-gray-400',
  tagClassName = 'text-green-800 border-green-200 bg-green-50',
  className = 'dectopS:grid-cols-6',
}) => (
  <div
    className={twJoin(
      'grid grid-cols-2 tabletS:grid-cols-3 tabletM:grid-cols-4 flex-wrap gap-8 w-full',
      className
    )}
  >
    {categoriesArray.map(({ category, values }, index) => (
      <div
        key={index}
        className={twJoin(
          'flex flex-col text-medium-semibold-secondary gap-3',
          categoryClassName
        )}
      >
        <span
          className={twJoin('text-small-semibold  mb-1', subCategoryClassName)}
        >
          {category}
        </span>
        {values &&
          values.map((value, index) => (
            <span
              key={index}
              className={twMerge(value === 'Solutions' && 'flex gap-2')}
            >
              {value}
              {value === 'Solutions' && (
                <Tag text="New" className={tagClassName} />
              )}
            </span>
          ))}
      </div>
    ))}
  </div>
);
