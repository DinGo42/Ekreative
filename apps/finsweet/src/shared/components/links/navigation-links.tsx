import { FC } from "react";
import { Link } from "./link";
import { LinkStyleTypes, Routs } from "../../constants";

type NavigationLinksProps = {
  navigationLinksStyleType?: LinkStyleTypes;
  contactUsButton?: boolean;
};

export const NavigationLinks: FC<NavigationLinksProps> = ({
  navigationLinksStyleType = LinkStyleTypes.MAIN,
  contactUsButton = false,
}) => (
  <>
    <Link href={Routs.HOME} styleType={navigationLinksStyleType}>
      Home
    </Link>
    <Link styleType={navigationLinksStyleType} href={Routs.ABOUT_US}>
      About us
    </Link>
    <Link styleType={navigationLinksStyleType} href={Routs.FEATURES}>
      Features
    </Link>
    <Link styleType={navigationLinksStyleType} href={Routs.PRICING}>
      Pricing
    </Link>
    <Link styleType={navigationLinksStyleType} href={Routs.FAQ}>
      FAQ
    </Link>
    <Link styleType={navigationLinksStyleType} href={Routs.BLOG}>
      Blog
    </Link>
    {contactUsButton && (
      <Link
        href={Routs.CONTACT_US}
        className="ml-4 rounded-4xl border-2 border-blue-200 p-3 pl-9 pr-9 hover:bg-blue-300"
      >
        Contact us
      </Link>
    )}
  </>
);
