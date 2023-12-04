import { FC } from 'react';
import { ComponentWrapper, FAQ, Link, Routs } from '@finsweet/shared';
import { featuresFAQ } from './constants';
import { FAQCard } from './FAQ-card';

export const FAQFeaturesBanner: FC = () => (
  <FAQ faqList={featuresFAQ} title="Frequently asked questions" />
);
