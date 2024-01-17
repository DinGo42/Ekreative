import { ComponentWrapper } from "@finsweet/shared";
import { FC } from "react";
import { OurTeamUI } from "./our-team-ui";

export const OurTeamBanner: FC = () => (
  <ComponentWrapper className="flex-col gap-12 bg-blue-50">
    <span className="text-h2">Meet our team</span>
    <div className="flex h-full w-full gap-10 max-desktopS:grid max-desktopS:grid-cols-2 max-phoneM:grid-cols-1">
      <OurTeamUI />
    </div>
  </ComponentWrapper>
);
