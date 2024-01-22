import { Contacts } from "./contacts";
import { FC } from "react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, LogoIcon, TwitterIcon } from "@finsweet/icons";
import { ComponentWrapper } from "../wrappers";
import { Link, NavigationLinks } from "../links";
import { LinkStyleTypes, Routs } from "@finsweet/shared";

export const Footer: FC = () => (
  <footer className="text-body-secondary flex flex-col bg-blue-900">
    <ComponentWrapper className="text-white-1000 max-tabletS:hidden tabletS:pb-0 desktopM:pb-0 desktopM:pt-28 pb-0 pt-0">
      <div className="flex flex-col gap-6">
        <LogoIcon />
        <span className="text-label-secondary tabletS:w-4/6 w-5/6">
          We are always open to discuss your project and improve your online presence.
        </span>
      </div>
      <div className="max-tabletM:hidden desktopS:w-1/4 flex w-2/4 flex-col gap-4">
        <span className="text-h2">Lets Talk!</span>
        <span className="text-body-main">
          We are always open to discuss your project, improve your online presence and help with your UX/UI design
          challenges.
        </span>
        <div className="flex gap-6">
          <Link href={Routs.HOME}>
            <FacebookIcon />
          </Link>
          <Link href={Routs.HOME}>
            <TwitterIcon />
          </Link>
          <Link href={Routs.HOME}>
            <InstagramIcon />
          </Link>
          <Link href={Routs.HOME}>
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </ComponentWrapper>
    <Contacts />
    <ComponentWrapper className="tabletS:pb-7 tabletS:pt-7 desktopM:pb-7 desktopM:pt-7 w-full justify-between bg-blue-50 pb-7  pt-7">
      <span>Copyright 2021, @finsweet.com</span>
      <div className="max-tabletSPlus:hidden tabletM:gap-8 flex gap-4">
        <NavigationLinks navigationLinksStyleType={LinkStyleTypes.SECONDARY} />
      </div>
    </ComponentWrapper>
  </footer>
);
