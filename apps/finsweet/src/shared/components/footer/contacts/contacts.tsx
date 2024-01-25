import { FC } from "react";
import { Link } from "../../links";

export const Contacts: FC = () => (
  <div className="bg-yellow-90 text-label-main max-tabletS:w-full max-phoneSPlus:hidden phoneM:pl-6 tabletS:ml-20 tabletS:pr-28 desktopS:ml-40 flex w-fit gap-7 pb-2 pl-3 pt-4">
    <div className="flex flex-col">
      <span>Email me at</span>
      <Link className="text-body-main" href="mailto:contact@website.com">
        contact@website.com
      </Link>
    </div>
    <div className="flex flex-col">
      <span>Call us</span>
      <Link className="text-body-main" href="tel:+0927627728525">
        0927-6277-28525
      </Link>
    </div>
  </div>
);
