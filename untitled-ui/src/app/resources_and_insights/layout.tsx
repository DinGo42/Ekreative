import { BlogFooter } from '@untitled/shared';
import { ReactNode } from 'react';

const ResourcesAndInsightsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <BlogFooter />
    </>
  );
};
export default ResourcesAndInsightsLayout;
