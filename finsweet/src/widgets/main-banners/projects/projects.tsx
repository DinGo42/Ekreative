import { Link, Image, ComponentWrapper } from '@finsweet/shared';
import { Colors } from '@finsweet/tailwindConfig';
import { FC } from 'react';

export const ProjectsBanner: FC = () => (
  <ComponentWrapper className="h-fit gap-16 flex-col text-white-1000 max-tabletS:pr-0 max-tabletS:pl-0">
    <div className="flex justify-between items-center text-lb-2 w-full">
      <span className="tabletS:text-xl text-lg max-tabletS:pl-10 text-blue-1000 max-phoneM:hidden">
        View our projects
      </span>
      <Link
        href={'/porfolio'}
        arrowColor={Colors['blue-1000']}
        className="text-blue-1000 max-tabletS:hidden"
      >
        View more
      </Link>
    </div>
    <div className="w-full h-[600px] flex gap-8">
      <Image
        src={'/projects/main-bg.png'}
        alt="Project1"
        style={{ objectFit: 'cover' }}
      >
        <div
          className="text-bs-2 flex flex-col h-full gap-4 pb-20 pl-12 justify-end absolute z-10 dectopS:w-[47%] tabletS:w-2/3 w-full"
          style={{
            background: `linear-gradient(
    329.39deg,
    #1c1e53 -10.96%,
    rgba(28, 30, 83, 0.42) 103.96%
  )`,
          }}
        >
          <span className="text-xs">
            Workhub office Webflow <br /> Webflow Design
          </span>
          <span>
            Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et velit
            aliquam
          </span>
          <Link
            href={'/porfolio'}
            arrowColor={Colors['yellow-90']}
            className="text-yellow-90 mt-6"
          >
            View projects
          </Link>
        </div>
      </Image>
      <div className="flex flex-col w-1/2 h-full gap-8 max-tabletM:hidden">
        <Image
          src={'/projects/portfolio.png'}
          alt="Project1"
          className="text-bs-2 h-full"
        >
          <div
            className="absolute z-10 w-full h-full top-0 left-0 flex flex-col justify-end p-14 gap-3"
            style={{
              background: `linear-gradient(
    329.39deg,
    #1c1e53 -10.96%,
    rgba(28, 30, 83, 0.42) 103.96%
  )`,
            }}
          >
            <span className="text-xs w-3/4">Unisaas Website Design</span>
            <Link
              href={'/porfolio'}
              arrowColor={Colors['yellow-90']}
              className="text-yellow-90"
            >
              View porfolio
            </Link>
          </div>
        </Image>
        <div className="h-full w-full text-bs-2 relative">
          <Image
            src={'/projects/site.png'}
            alt="Project1"
            sizes="50vw"
            className="h-full w-full"
            style={{ objectFit: 'fill' }}
          />
        </div>
      </div>
    </div>
  </ComponentWrapper>
);
