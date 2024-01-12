'use client';
import { useState, useRef, ReactNode, FC } from 'react';
import { feedbacks } from './constants';
import { Button, ButtonStyleTypes } from '@finsweet/shared';

type FeedbackBannerUIProps = {
  children: ReactNode;
};

export const FeedbackBannerUI: FC<FeedbackBannerUIProps> = ({ children }) => {
  const [scrolls, setScroll] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselHandler = (L: boolean = false) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const maxScrolls = feedbacks.length - 1;
    const currentScroll = L ? scrolls - 1 : scrolls + 1;
    L
      ? setScroll(() => (currentScroll < 0 ? 0 : currentScroll))
      : setScroll(() =>
          currentScroll > maxScrolls ? maxScrolls : currentScroll
        );
    carousel.scrollLeft = currentScroll * carousel.clientWidth;
  };
  return (
    <>
      <div className="w-full relative">
        <div
          className="grid grid-flow-col auto-cols-[100%] overflow-hidden w-full scroll-smooth"
          ref={carouselRef}
        >
          {children}
        </div>
        <div className="flex items-center gap-4 absolute bottom-0 right-0 text-h5">
          <Button
            className="rotate-180"
            styleType={ButtonStyleTypes.ROUND}
            onClick={() => carouselHandler(true)}
          >
            &#62;
          </Button>
          <Button
            styleType={ButtonStyleTypes.ROUND}
            onClick={() => carouselHandler()}
          >
            &#62;
          </Button>
        </div>
      </div>
    </>
  );
};
