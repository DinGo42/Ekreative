type FeaturesCardProps = {
  iconSrc: string;
  title: string;
  text: string;
  cardColor?: string;
};

class FeaturesCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <link rel="stylesheet" href="dist/output.css" />

      <div id='card' class='flex flex-col pl-12 pr-8 pb-12 pt-[52px] gap-3 bg-white-1000'>
        <img id='card-icon-src' class='size-8 mb-2'/>
        <span id='card-title' class='text-xs text-blue-1000'></span>
        <span id='card-text' class='text-bs-1 text-blue-1000 text-opacity-70'></span>
      </div>
    `;
  }

  connectedCallback() {
    this.replacePropsInShadowRoot({
      iconSrc: this.getAttribute('iconSrc') || '',
      title: this.getAttribute('title') || '',
      text: this.getAttribute('text') || '',
    });
  }

  private replacePropsInShadowRoot({
    iconSrc,
    text,
    title,
    cardColor,
  }: FeaturesCardProps) {
    const shadowRoot = this.shadowRoot;

    if (shadowRoot) {
      const card = shadowRoot.querySelector('#card');

      const icon: HTMLImageElement | null =
        shadowRoot.querySelector('#card-icon-src');
      icon!.src = iconSrc || '';

      shadowRoot.querySelector('#card-title')!.textContent = title || '';
      shadowRoot.querySelector('#card-text')!.textContent = text || '';

      cardColor?.split(' ').forEach((style) => {
        console.log(style, card);
        card!.classList.remove('bg-white-1000');
        card!.classList.add(style);
      });
    }
  }

  static get observedAttributes() {
    return ['title', 'iconSrc', 'text', 'cardColor'];
  }

  attributeChangedCallback(oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.replacePropsInShadowRoot({
        iconSrc: this.getAttribute('iconSrc') || '',
        title: this.getAttribute('title') || '',
        text: this.getAttribute('text') || '',
        cardColor: this.getAttribute('cardColor') || '',
      });
    }
  }
}

customElements.define('features-card', FeaturesCard);
