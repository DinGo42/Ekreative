type FeedbackCarouselCardProps = {
  authorsAvatarSrc: string;
  authorsFullName: string;
  authorsPosition: string;
  authorsQuote: string;
};

class FeedbackCarouselCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `
      <link rel="stylesheet" href="dist/output.css" />
      <div class="w-full h-fit tabletS:text-sm text-lb-2 gap-12 flex flex-col">
      <span id='authorsQuote'></span>
      <div class="flex items-center gap-5 justify-between">
        <div class="grid grid-rows-1 grid-flow-col gap-4">
          <img id='authorsAvatarSrc' class="size-[52px] rounded-full">
          <div class="flex flex-col text-lb-1">
            <span id='authorsFullName'></span>
            <span id='authorsPosition' class="text-xxs"></span>
          </div>
        </div>
      </div>`;
  }

  connectedCallback() {
    this.replacePropsInShadowRoot({
      authorsAvatarSrc: this.getAttribute('authorsAvatarSrc') || '',
      authorsFullName: this.getAttribute('authorsFullName') || '',
      authorsPosition: this.getAttribute('authorsPosition') || '',
      authorsQuote: this.getAttribute('authorsQuote') || '',
    });
  }

  private replacePropsInShadowRoot({
    authorsAvatarSrc,
    authorsFullName,
    authorsPosition,
    authorsQuote,
  }: FeedbackCarouselCardProps) {
    const shadowRoot = this.shadowRoot;

    if (shadowRoot) {
      const avatarIcon: HTMLImageElement | null =
        shadowRoot.querySelector('#authorsAvatarSrc');
      avatarIcon!.src = authorsAvatarSrc || '';

      shadowRoot.querySelector('#authorsFullName')!.textContent =
        authorsFullName || '';
      shadowRoot.querySelector('#authorsPosition')!.textContent =
        authorsPosition || '';
      shadowRoot.querySelector('#authorsQuote')!.textContent =
        authorsQuote || '';
    }
  }

  static get observedAttributes() {
    return [
      'authorsAvatarSrc',
      'authorsFullName',
      'authorsPosition',
      'authorsQuote',
    ];
  }

  attributeChangedCallback(
    name: unknown,
    oldValue: unknown,
    newValue: unknown
  ) {
    if (oldValue !== newValue) {
      this.replacePropsInShadowRoot({
        authorsAvatarSrc: this.getAttribute('authorsAvatarSrc') || '',
        authorsFullName: this.getAttribute('authorsFullName') || '',
        authorsPosition: this.getAttribute('authorsPosition') || '',
        authorsQuote: this.getAttribute('authorsQuote') || '',
      });
    }
  }
}

customElements.define('feedback-carousel-card', FeedbackCarouselCard);
