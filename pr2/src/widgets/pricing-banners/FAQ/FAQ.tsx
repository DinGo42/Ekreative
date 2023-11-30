import { ComponentWrapper, Link } from '@pr2/shared';
import { pricingFAQ } from './constants';
import { FAQPricingCard } from './FAQ-card';

export const FAQPricingBanner = () => (
  <ComponentWrapper className="gap-6 items-start">
    <div className="flex flex-col gap-4 w-1/3">
      <span className="text-xl">
        Frequently <br /> asked questions
      </span>
      <Link href={'/contact-us'} className="text-lb-1 text-blue-700">
        Contact us for more info
      </Link>
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
