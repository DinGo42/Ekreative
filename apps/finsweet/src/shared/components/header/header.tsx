import { FC } from "react";
import { LogoIcon } from "@finsweet/icons";
import { ComponentWrapper } from "../wrappers";
import { Link, NavigationLinks } from "../links";
import { Routs } from "@finsweet/shared";

export const Header: FC = () => (
  <ComponentWrapper className="text-white-1000 tabletS:py-3 desktopM:py-3 sticky top-0 z-50 justify-between bg-blue-900 pb-3 pt-3">
    <header className="flex w-full items-center justify-between">
      <LogoIcon />
      <div className="text-body-secondary max-tabletM:hidden flex items-center gap-8">
        <NavigationLinks contactUsButton={true} />
      </div>
      <Link
        href={Routs.CONTACT_US}
        className="rounded-4xl max-phoneSPlus:hidden phoneSPlus:pl-9 phoneSPlus:pr-9 tabletM:hidden ml-4 border-2 border-blue-200 p-3 pl-4 pr-4 hover:bg-blue-300"
      >
        Contact us
      </Link>
    </header>
  </ComponentWrapper>
);
