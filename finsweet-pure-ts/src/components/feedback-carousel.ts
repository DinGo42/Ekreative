import { useCarousel } from './carousel';

class FeedbackCarousel extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `
        <link rel="stylesheet" href="dist/output.css" />

        <div class="w-[850px] relative">
        <div
          id='feedback-carousel'
          class="grid grid-flow-col auto-cols-[100%] overflow-hidden w-full scroll-smooth"
        >
          <feedback-carousel-card 
            authorsAvatarSrc='public/feedbacks/avatar_1.png'
            authorsFullName='Jenny Wilson'
            authorsPosition='Vice President'
            authorsQuote='"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."'
            ></feedback-carousel-card>

            <feedback-carousel-card 
            authorsAvatarSrc='public/feedbacks/avatar_1.png'
            authorsFullName='Ivan Nesterenko'
            authorsPosition='Vice President'
            authorsQuote='"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."'
            ></feedback-carousel-card>
            
            <feedback-carousel-card 
            authorsAvatarSrc='public/feedbacks/avatar_1.png'
            authorsFullName='Jenny Wilson'
            authorsPosition='Vice President'
            authorsQuote='"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."'
            ></feedback-carousel-card>
        </div>
        <div class="flex items-center gap-4 absolute bottom-0 right-0">
          <button
            id='prev-feedback-carousel-item'
            class='text-xl rotate-180 size-12 text-blue-1000 hover:bg-blue-700 transition-all hover:text-white-1000 bg-white-1000 rounded-full'
          >
          <span class='absolute -top-4 left-2'> &#62;</span>
          </button>
          <button
            id='next-feedback-carousel-item'
            class='text-xl size-12 relative text-blue-1000 hover:bg-blue-700 transition-all hover:text-white-1000 bg-white-1000 rounded-full'
          >
           <span class='absolute -top-4 left-2'> &#62;</span>
          </button>
        </div>
      </div>
      `;
    const { nextItem, prevItem } = useCarousel(
      shadowRoot.querySelector('#feedback-carousel')!
    );

    shadowRoot
      .querySelector('#next-feedback-carousel-item')
      ?.addEventListener('click', () => nextItem());
    shadowRoot
      .querySelector('#prev-feedback-carousel-item')
      ?.addEventListener('click', () => prevItem());
  }
}

customElements.define('feedback-carousel', FeedbackCarousel);
