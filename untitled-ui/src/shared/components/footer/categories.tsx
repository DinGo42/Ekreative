import { FC } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import { Link, Tag } from '..';
import { Routes } from '../../constants/routes';

export const navigationData = [
  {
    category: 'Product',
    values: [
      { sebCategory: 'Overview', href: Routes.HOME },
      { sebCategory: 'Features', href: Routes.HOME },
      { sebCategory: 'Solutions', href: Routes.HOME },
      { sebCategory: 'Tutorials', href: Routes.HOME },
      { sebCategory: 'Pricing', href: Routes.HOME },
      { sebCategory: 'Releases', href: Routes.HOME },
    ],
  },
  {
    category: 'Company',
    values: [
      { sebCategory: 'About us', href: Routes.HOME },
      { sebCategory: 'Careers', href: Routes.HOME },
      { sebCategory: 'Press', href: Routes.HOME },
      { sebCategory: 'News', href: Routes.HOME },
      { sebCategory: 'Media kit', href: Routes.HOME },
      { sebCategory: 'Contact', href: Routes.HOME },
    ],
  },
  {
    category: 'Resources',
    values: [
      { sebCategory: 'Blog', href: Routes.BLOG },
      { sebCategory: 'Newsletter', href: Routes.HOME },
      { sebCategory: 'Events', href: Routes.HOME },
      { sebCategory: 'Help centre', href: Routes.HOME },
      { sebCategory: 'Tutorials', href: Routes.HOME },
      { sebCategory: 'Support', href: Routes.HOME },
    ],
  },
  {
    category: 'Use Cases',
    values: [
      { sebCategory: 'Startups', href: Routes.HOME },
      { sebCategory: 'Enterprise', href: Routes.HOME },
      { sebCategory: 'Government', href: Routes.HOME },
      { sebCategory: 'SaaS centre', href: Routes.HOME },
      { sebCategory: 'Marketplaces', href: Routes.HOME },
      { sebCategory: 'Ecommerce', href: Routes.HOME },
    ],
  },
  {
    category: 'Social',
    values: [
      { sebCategory: 'Twitter', href: Routes.HOME },
      { sebCategory: 'LinkedIn', href: Routes.HOME },
      { sebCategory: 'Facebook', href: Routes.HOME },
      { sebCategory: 'GitHub', href: Routes.HOME },
      { sebCategory: 'AngelList', href: Routes.HOME },
      { sebCategory: 'Dribbble', href: Routes.HOME },
    ],
  },
  {
    category: 'Legal',
    values: [
      { sebCategory: 'Terms', href: Routes.HOME },
      { sebCategory: 'Privacy', href: Routes.HOME },
      { sebCategory: 'Cookies', href: Routes.HOME },
      { sebCategory: 'Licenses', href: Routes.HOME },
      { sebCategory: 'Settings', href: Routes.HOME },
      { sebCategory: 'Contact', href: Routes.HOME },
    ],
  },
];

type CategoriesProps = {
  categoriesArray: {
    category: string;
    values?: {
      sebCategory: string;
      href: string;
    }[];
  }[];
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
          values.map(({ sebCategory, href }, index) => (
            <Link
              href={href}
              key={index}
              className={twMerge(sebCategory === 'Solutions' && 'flex gap-2')}
            >
              {sebCategory}
              {sebCategory === 'Solutions' && (
                <Tag text="New" className={tagClassName} />
              )}
            </Link>
          ))}
      </div>
    ))}
  </div>
);
