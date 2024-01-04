import { FC } from 'react';
import { FAQ } from '@finsweet/shared';
import { featuresFAQ } from './constants';

export const FAQFeaturesBanner: FC = () => (
  <FAQ faqList={featuresFAQ} title="Frequently asked questions" />
);
