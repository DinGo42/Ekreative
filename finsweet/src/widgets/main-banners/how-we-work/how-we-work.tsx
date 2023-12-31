import { ComponentWrapper, Link, Routs } from '@finsweet/shared';
import { Steps } from './steps';
import { FC } from 'react';
import { Colors } from '@finsweet/tailwindConfig';

export const HowWeWorkBanner: FC = () => (
  <ComponentWrapper className="w-full bg-blue-50 items-start dectopS:flex-row flex-col max-dectopS:items-center max-dectopS:gap-10">
    <div className="flex flex-col text-bs-1 gap-4 w-full">
      <span className="text-xl">How we work</span>
      <span>
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor.
      </span>
      <Link
        href={Routs.CONTACT_US}
        arrowColor={Colors['blue-700']}
        className="text-lb-1 text-blue-700"
      >
        Get in touch with us
      </Link>
    </div>
    <Steps />
  </ComponentWrapper>
);
