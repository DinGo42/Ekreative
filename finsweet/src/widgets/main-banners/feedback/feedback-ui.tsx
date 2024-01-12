'use client';
import { useState, useRef, ReactNode, FC } from 'react';
import { feedbacks } from './constants';
import { Button, ButtonStyleTypes } from '@finsweet/shared';

type FeedbackBannerUIProps = {
  children: ReactNode;
};

export const FeedbackBannerUI: FC<FeedbackBannerUIProps> = ({ children }) => {
  const [scrolls, setScroll] = useState(0);
  const caruselRef = useRef<HTMLDivElement>(null);
  const caruselHandler = (L: boolean = false) => {
    const carusel = caruselRef.current;
    if (!carusel) return;
    const maxScrolls = feedbacks.length - 1;
    const currentScroll = L ? scrolls - 1 : scrolls + 1;
    L
      ? setScroll(() => (currentScroll < 0 ? 0 : currentScroll))
      : setScroll(() =>
          currentScroll > maxScrolls ? maxScrolls : currentScroll
        );
    carusel.scrollLeft = currentScroll * carusel.clientWidth;
  };
  return (
    <>
      <div className="w-full relative">
        <div
          className="grid grid-flow-col auto-cols-[100%] overflow-hidden w-full scroll-smooth"
          ref={caruselRef}
        >
          {children}
        </div>
        <div className="flex items-center gap-4 absolute bottom-0 right-0">
          <Button
            className="rotate-180"
            styleType={ButtonStyleTypes.ROUND}
            onClick={() => caruselHandler(true)}
          >
            &#62;
          </Button>
          <Button
            styleType={ButtonStyleTypes.ROUND}
            onClick={() => caruselHandler()}
          >
            &#62;
          </Button>
        </div>
      </div>
    </>
  );
};
