'use client';
import { ComponentWrapper, Link, LinksStyleTypes } from '@pr2/shared';
import { Steps } from './steps';
import { FC } from 'react';
import { Colors } from '../../../../tailwind.config';

export const HowWeWorkBanner: FC = () => (
  <ComponentWrapper className="w-full bg-blue-50 gap-80 items-start">
    <div className="flex flex-col text-bs-1 gap-4">
      <span className="text-xl">How we work</span>
      <span>
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor.
      </span>
      <Link
        href={'#'}
        arrowColor={Colors['blue-700']}
        className="text-lb-1 text-blue-700"
      >
        Get in touch with us
      </Link>
    </div>
    <Steps />
  </ComponentWrapper>
);
