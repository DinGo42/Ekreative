import { ComponentWrapper } from "@finsweet/shared";
import { FC } from "react";

export const PrivacyPolicyBanner: FC = () => (
  <ComponentWrapper className="max-tabletS:pl-16 max-tabletS:pr-16 max-phoneM:pl-10 max-phoneM:pr-10 max-phoneM:text-center flex-col items-start gap-4 pl-[23.75rem] pr-[23.75rem]">
    <span className="text-h2 self-center">Privacy Policy</span>
    <span className="text-body-secondary mb-12 self-center text-center text-opacity-70">
      When you’re ready to go beyond prototyping in Figma, Webflow’s <br />
      ready to help you bring your
    </span>
    <span className="text-h3 mb-4">Lorem ipsum dolor.</span>
    <span className="mb-2 text-opacity-70">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident.
    </span>
    <span className="mb-6 text-opacity-70">
      Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.
    </span>
    <span className="text-h3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    <span className="mb-2 text-opacity-70">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
    </span>
    <ul className="max-tabletS:flex max-tabletS:flex-col max-tabletS:gap-5 list-inside list-disc">
      {[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
      ].map((step, index) => (
        <li key={index} className="text-opacity-70">
          {step}
        </li>
      ))}
    </ul>
    <span className="text-opacity-70">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
    </span>
  </ComponentWrapper>
);
