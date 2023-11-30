import { FC } from 'react';
import { ComponentWrapper, Link } from '@pr2/shared';
import { faq } from './constants';
import { FAQCard } from './FAQ-card';

export const FAQFeaturesBanner: FC = () => (
  <ComponentWrapper className="gap-32 items-start">
    <div className="flex flex-col gap-4">
      <span className="text-lg">Frequently asked questions</span>
      <Link href={'/contact-us'} className="text-lb-1 text-blue-700">
        Contact us for more info
      </Link>
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
