import { FC } from "react";
import { FAQ } from "@finsweet/shared";
import { mainFAQ } from "./constants";

export const FAQBanner: FC = () => (
  <FAQ faqList={mainFAQ} title="Frequently asked questions" className="max-tabletSPlus:flex-col" />
);
