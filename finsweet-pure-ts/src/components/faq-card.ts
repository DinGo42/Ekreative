type FAQCardProps = {
  question: string;
  index: string;
  answer: string;
};

class FAQCard extends HTMLElement {
  #isOpen: boolean = false;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <link rel="stylesheet" href="dist/output.css" />

      <div id='question-wrapper' class='flex flex-col border-b-2 gap-4 border-[#ECECF1] pt-8 pb-4 w-full transition-all cursor-pointer'>
        <div class="flex items-center w-full justify-between">
          <div class="flex gap-14 items-center">
            <span id='card-index' class="text-h6 text-blue-700 max-phoneM:hidden"></span>
            <span id='card-question' class="text-h6"></span>
          </div>
          <button 
          id='open-answer-button'
          class='transition-all p-2'
          class='h-fit p-4'>
            <img src='/svgs/plus.svg' class='rotate-45'/>
          </button>
        </div>
        <div id='question-container' class='grid-flow-row grid transition-all duration-700 tabletS:pl-20 grid-rows-[0fr]'>
          <span id='card-answer' class='overflow-hidden text-label-main w-[75%]'></span>
        </div>
      </div>
    `;

    shadowRoot
      .querySelector('#open-answer-button')
      ?.addEventListener('click', () => {
        const wrapper = shadowRoot.querySelector('#question-wrapper');
        const button = shadowRoot.querySelector('#open-answer-button');
        const container = shadowRoot.querySelector('#question-container');

        const toggleOpen = () => {
          wrapper?.classList.add('pb-12');
          button?.classList.add('rotate-45');
          container?.classList.add('grid-rows-[1fr]');
        };

        const switchToClose = () => {
          wrapper?.classList.remove('pb-12');
          button?.classList.remove('rotate-45');
          container?.classList.remove('grid-rows-[1fr]');
        };

        this.setOpen();

        this.#isOpen ? toggleOpen() : switchToClose();
      });
  }

  connectedCallback() {
    this.replacePropsInShadowRoot({
      index: this.getAttribute('index') || '',
      answer: this.getAttribute('answer') || '',
      question: this.getAttribute('question') || '',
    });
  }

  private replacePropsInShadowRoot({ index, answer, question }: FAQCardProps) {
    const shadowRoot = this.shadowRoot;

    if (shadowRoot) {
      shadowRoot.querySelector('#card-index')!.textContent = index || '';
      shadowRoot.querySelector('#card-question')!.textContent = question || '';
      shadowRoot.querySelector('#card-answer')!.textContent = answer || '';
    }
  }

  private setOpen(): void {
    this.#isOpen = !this.#isOpen;
  }

  static get observedAttributes() {
    return ['answer', 'index', 'question'];
  }

  attributeChangedCallback(oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.replacePropsInShadowRoot({
        answer: this.getAttribute('answer') || '',
        index: this.getAttribute('index') || '',
        question: this.getAttribute('question') || '',
      });
    }
  }
}

customElements.define('faq-card', FAQCard);
