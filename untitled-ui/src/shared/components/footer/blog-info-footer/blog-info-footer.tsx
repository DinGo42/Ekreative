import { FC } from 'react';
import { Logo } from '../../logo';
import { twJoin } from 'tailwind-merge';
import { Resources } from './resources';
import { Categories, navigationData } from '../categories';

export const BlogInfoFooter: FC = () => (
  <footer
    className={twJoin(
      'py-12 w-screen -mx-[calc((100vw-100%)/2)] px-4 flex flex-col items-center bg-purple-900 '
    )}
  >
    <div className="max-w-[1280px] w-full flex max-desktopS:flex-col gap-6 ">
      <div className="flex flex-col gap-6 desktopS:w-1/2">
        <Logo textClassName="text-white" />
        <span className="text-medium-regular text-purple-150 mb-6">
          Design amazing digital experiences that create more happy in the
          world.
        </span>
      </div>
      {
        <Categories
          className="desktopS:grid-cols-5"
          tagClassName="text-white border-[#ffffff4d] bg-[#ffffff1a]"
          categoryClassName="text-purple-200"
          subCategoryClassName="text-purple-150"
          categoriesArray={navigationData.filter(
            ({ category }) => category !== 'Use Cases'
          )}
        />
      }
    </div>
    <div className="w-screen -mx-[calc((100vw-100%)/2)] px-4  border-t-2 border-[#7F56D9] mt-12 pt-12 flex justify-center">
      <div className="max-w-[1280px] flex flex-wrap items-center justify-between gap-6 w-full">
        <Resources />
        <span className="text-small-regular text-purple-150">
          © 2077 Untitled UI. All rights reserved.
        </span>
      </div>
    </div>
  </footer>
);
