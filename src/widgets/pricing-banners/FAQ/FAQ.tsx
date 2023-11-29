import { ComponentWrapper } from '@pr2/shared';
import { pricingFAQ } from './constants';
import { FAQPricingCard } from './FAQ-card';

export const FAQPricingBanner = () => (
  <ComponentWrapper className="gap-6 items-start">
    <div className="flex flex-col text-xl gap-4 w-1/3">
      <span>
        Frequently <br /> asked questions
      </span>
      <span className="text-lb-1 text-blue-700">Contact us for more info</span>
    </div>
    <div className="flex flex-col h-fit">
      {pricingFAQ.map(({ answer, question }, index) => (
        <FAQPricingCard
          key={index}
          answer={answer}
          question={question}
          index={index}
        />
      ))}
    </div>
  </ComponentWrapper>
);
