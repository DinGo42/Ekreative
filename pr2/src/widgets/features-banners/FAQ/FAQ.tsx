import { FC } from 'react';
import { ComponentWrapper } from '@pr2/shared';
import { faq } from './constants';
import { FAQCard } from './FAQ-card';

export const FAQFeaturesBanner: FC = () => (
  <ComponentWrapper className="gap-32 items-start">
    <div className="flex flex-col text-lg gap-4">
      <span>Frequently asked questions</span>
      <span className="text-lb-1 text-blue-700">Contact us for more info</span>
    </div>
    <div className="flex flex-col w-full h-fit">
      {faq.map(({ answer, question }, index) => (
        <FAQCard
          key={index}
          answer={answer}
          question={question}
          index={index}
        />
      ))}
    </div>
  </ComponentWrapper>
);
