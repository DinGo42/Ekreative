import { ComponentWrapper } from "@finsweet/shared";
import { ContactUsFrom } from "./from";
import { FC } from "react";

export const ContactUsBanner: FC = () => (
  <ComponentWrapper className="h-fit flex-col gap-4 max-phoneM:bg-blue-50">
    <span className="text-h2 max-phoneM:text-center">Contact Us</span>
    <span className="mb-12 text-center text-body-main text-opacity-70">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
      eiusmod tempor incididunt ut labore.
    </span>
    <ContactUsFrom />
  </ComponentWrapper>
);
