import { FC } from 'react';
import { Categories } from '../blogs';
import { twMerge } from 'tailwind-merge';
import { Button, ButtonStyleTypes } from '@untitled/shared';

type BlogCategoriesProps = {
  setCategory: (newCategory: Categories) => void;
  selectedCategory: Categories;
};

export const BlogCategories: FC<BlogCategoriesProps> = ({
  selectedCategory,
  setCategory,
}) => {
  return (
    <div className="w-full overflow-hidden p-2 text-medium-semibold-secondary text-gray-400 flex items-center overflow-x-auto">
      <Button
        onClick={() => setCategory(Categories.ALL)}
        styleType={ButtonStyleTypes.PURPLE_WITH_BORDER_BOTTOM}
        className={twMerge(
          selectedCategory !== Categories.ALL &&
            'border-b-[1px] border-gray-400 text-gray-400'
        )}
      >
        {Categories.ALL}
      </Button>
      <Button
        onClick={() => setCategory(Categories.DESIGN)}
        styleType={ButtonStyleTypes.PURPLE_WITH_BORDER_BOTTOM}
        className={twMerge(
          selectedCategory !== Categories.DESIGN &&
            'border-b-[1px] border-gray-400 text-gray-400'
        )}
      >
        {Categories.DESIGN}
      </Button>
      <Button
        onClick={() => setCategory(Categories.PRODUCT)}
        styleType={ButtonStyleTypes.PURPLE_WITH_BORDER_BOTTOM}
        className={twMerge(
          selectedCategory !== Categories.PRODUCT &&
            'border-b-[1px] border-gray-400 text-gray-400'
        )}
      >
        {Categories.PRODUCT}
      </Button>
      <Button
        onClick={() => setCategory(Categories.SOFTWARE_ENGINEERING)}
        styleType={ButtonStyleTypes.PURPLE_WITH_BORDER_BOTTOM}
        className={twMerge(
          selectedCategory !== Categories.SOFTWARE_ENGINEERING &&
            'border-b-[1px] border-gray-400 text-gray-400'
        )}
      >
        {Categories.SOFTWARE_ENGINEERING}
      </Button>
      <Button
        onClick={() => setCategory(Categories.CUSTOMER_SUCCESS)}
        styleType={ButtonStyleTypes.PURPLE_WITH_BORDER_BOTTOM}
        className={twMerge(
          selectedCategory !== Categories.CUSTOMER_SUCCESS &&
            'border-b-[1px] border-gray-400 text-gray-400'
        )}
      >
        {Categories.CUSTOMER_SUCCESS}
      </Button>
    </div>
  );
};
