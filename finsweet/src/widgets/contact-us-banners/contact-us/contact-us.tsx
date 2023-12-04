import { ComponentWrapper } from '@finsweet/shared';
import { ContactUsFrom } from './from';

export const ContactUsBanner = () => (
  <ComponentWrapper className="h-fit flex-col gap-4 max-phoneM:bg-blue-50">
    <span className="text-xl max-phoneM:text-center">Contact Us</span>
    <span className="text-bs-1 text-opacity-70 mb-12 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
      eiusmod tempor incididunt ut labore.
    </span>
    <ContactUsFrom />
  </ComponentWrapper>
);
