import { BlogCatalog } from '@untitled/widgets';
import { FC } from 'react';

const ResourcesAndInsights: FC = () => (
  <>
    <div className="flex flex-col gap-3">
      <span className="text-small-semibold text-purple-800">Our blog</span>
      <span className="text-medium-semibold-main tabletS:text-large-semidold text-black-900">
        Resources and insights
      </span>
      <span className="text-regular-main text-gray-600 mt-1">
        The latest industry news, interviews, technologies, and resources.
      </span>
    </div>
    <BlogCatalog />
  </>
);
export default ResourcesAndInsights;
