'use client';
import { useState, useRef } from 'react';
import { feedbacks } from './constants';
import { Button, ButtonStyleTypes } from '@pr2/shared';
import { FeedbackCard } from './feedback-card';

export const FeedbackBannerUI = () => {
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
      <div
        className="grid grid-flow-col auto-cols-[100%] overflow-hidden w-full scroll-smooth"
        ref={caruselRef}
      >
        {feedbacks.map(({ avatar, fullName, possition, text }, index) => (
          <FeedbackCard
            key={index}
            authorAvatarLink={avatar}
            authorFullName={fullName}
            authorPossition={possition}
            text={text}
          />
        ))}
      </div>
      <div className="flex items-center gap-4 absolute bottom-32 right-64">
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
    </>
  );
};
