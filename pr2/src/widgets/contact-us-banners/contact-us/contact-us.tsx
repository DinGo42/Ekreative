import { ComponentWrapper } from '@pr2/shared';
import { ContactUsFrom } from './from';

export const ContactUsBanner = () => (
  <ComponentWrapper className="h-fit flex-col gap-4">
    <span className="text-xl">Contact Us</span>
    <span className="text-bs-1 text-opacity-70 mb-12 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
      eiusmod tempor incididunt ut labore.
    </span>
    <ContactUsFrom />
  </ComponentWrapper>
);
