import { Company1, Company2, Company3, Company4, Company5 } from "@finsweet/icons";
import { FC } from "react";

export const Sponsors: FC = () => (
  <div className="flex w-full items-center justify-between">
    <div className="flex flex-col text-body-main">
      <span className="text-h3">100.000+</span>
      <span className="text-opacity-70">Finsweet Users</span>
    </div>
    <Company1 className="max-desktopS:hidden" />
    <Company2 className="max-desktopS:hidden" />
    <Company3 className="max-tabletSPlus:hidden" />
    <Company4 className="max-tabletS:hidden" />
    <Company5 className="max-phoneM:hidden" />
  </div>
);
