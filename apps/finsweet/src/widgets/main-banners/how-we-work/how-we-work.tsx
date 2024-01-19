import { ComponentWrapper, Link, Routs } from "@finsweet/shared";
import { Steps } from "./steps";
import { FC } from "react";
import { Colors } from "@finsweet/tailwindConfig";

export const HowWeWorkBanner: FC = () => (
  <ComponentWrapper className="w-full flex-col items-start bg-blue-50 max-desktopS:items-center max-desktopS:gap-10 desktopS:flex-row">
    <div className="flex w-full flex-col gap-4 text-body-main">
      <span className="text-h2">How we work</span>
      <span>
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.
      </span>
      <Link href={Routs.CONTACT_US} arrowColor={Colors["blue-700"]} className="text-label-main text-blue-700">
        Get in touch with us
      </Link>
    </div>
    <Steps />
  </ComponentWrapper>
);
