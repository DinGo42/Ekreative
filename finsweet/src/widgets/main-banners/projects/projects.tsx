import { Link, Image, ComponentWrapper, Routs } from "@finsweet/shared";
import { Colors } from "@finsweet/tailwindConfig";
import { FC } from "react";

export const ProjectsBanner: FC = () => (
  <ComponentWrapper className="h-fit flex-col gap-16 text-white-1000 max-tabletS:pl-0 max-tabletS:pr-0">
    <div className="flex w-full items-center justify-between text-label-secondary">
      <span className="text-h3 text-blue-1000 max-tabletS:pl-10 max-phoneM:hidden tabletS:text-h2">
        View our projects
      </span>
      <Link href={Routs.PORTFOLIO} arrowColor={Colors["blue-1000"]} className="text-blue-1000 max-tabletS:hidden">
        View more
      </Link>
    </div>
    <div className="flex h-[600px] w-full gap-8">
      <Image src={"/projects/main-bg.png"} alt="Project1" style={{ objectFit: "cover" }}>
        <div
          className="absolute z-10 flex h-full w-full flex-col justify-end gap-4 pb-20 pl-12 text-body-secondary tabletS:w-2/3 desktopS:w-[47%]"
          style={{
            background: `linear-gradient(
    329.39deg,
    #1c1e53 -10.96%,
    rgba(28, 30, 83, 0.42) 103.96%
  )`,
          }}
        >
          <span className="text-h6">
            Workhub office Webflow <br /> Webflow Design
          </span>
          <span>
            Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et velit aliquam
          </span>
          <Link href={Routs.PORTFOLIO} arrowColor={Colors["yellow-90"]} className="mt-6 text-yellow-90">
            View projects
          </Link>
        </div>
      </Image>
      <div className="flex h-full w-1/2 flex-col gap-8 max-tabletM:hidden">
        <Image src={"/projects/portfolio.png"} alt="Project1" className="h-full text-body-secondary">
          <div
            className="absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-end gap-3 p-14"
            style={{
              background: `linear-gradient(
    329.39deg,
    #1c1e53 -10.96%,
    rgba(28, 30, 83, 0.42) 103.96%
  )`,
            }}
          >
            <span className="w-3/4 text-h6">Unisaas Website Design</span>
            <Link href={Routs.PORTFOLIO} arrowColor={Colors["yellow-90"]} className="text-yellow-90">
              View portfolio
            </Link>
          </div>
        </Image>
        <div className="relative h-full w-full text-body-secondary">
          <Image
            src={"/projects/site.png"}
            alt="Project1"
            sizes="50vw"
            className="h-full w-full"
            style={{ objectFit: "fill" }}
          />
        </div>
      </div>
    </div>
  </ComponentWrapper>
);
