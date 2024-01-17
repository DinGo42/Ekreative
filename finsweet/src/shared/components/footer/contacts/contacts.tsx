import { FC } from "react";

export const Contacts: FC = () => (
  <div className="flex w-fit gap-7 bg-yellow-90 pb-2 pl-3 pt-4 text-label-main max-tabletS:w-full max-phoneSPlus:hidden phoneM:pl-6 tabletS:ml-20 tabletS:pr-28 desktopS:ml-40">
    <div className="flex flex-col">
      <span>Email me at</span>
      <a className="text-body-main" href="mailto:contact@website.com">
        contact@website.com
      </a>
    </div>
    <div className="flex flex-col">
      <span>Call us</span>
      <a className="text-body-main" href="tel:+0927627728525">
        0927-6277-28525
      </a>
    </div>
  </div>
);
