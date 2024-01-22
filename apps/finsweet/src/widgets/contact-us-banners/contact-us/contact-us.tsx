import { ComponentWrapper } from "@finsweet/shared";
import { ContactUsFrom } from "./from";
import { FC } from "react";

export const ContactUsBanner: FC = () => (
  <ComponentWrapper className="max-phoneM:bg-blue-50 h-fit flex-col gap-4">
    <span className="text-h2 max-phoneM:text-center">Contact Us</span>
    <span className="text-body-main mb-12 text-center text-opacity-70">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
      eiusmod tempor incididunt ut labore.
    </span>
    <ContactUsFrom />
  </ComponentWrapper>
);
