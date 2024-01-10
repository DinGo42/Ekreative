export const useCarousel = (carouselId: string | Element) => {
  let scrolls = 0;
  const carousel =
    typeof carouselId === 'string'
      ? document.getElementById(carouselId)
      : carouselId;

  const carouselHandler = (L: boolean = false) => {
    console.log(carousel);
    if (!carousel) return;
    const maxScrolls = carousel.childElementCount - 1;

    const currentScroll = L ? scrolls - 1 : scrolls + 1;

    scrolls = Math.max(0, Math.min(currentScroll, maxScrolls));

    const scrollPosition = scrolls * carousel.clientWidth;

    requestAnimationFrame(() => {
      carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    });
  };

  return {
    nextItem: () => {
      carouselHandler();
    },
    prevItem: () => {
      carouselHandler(true);
    },
  };
};
