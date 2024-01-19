type CardProps = {
  iconSrc: string;
  title: string;
  text: string;
  cardColor?: string;
};

class Card extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <link rel="stylesheet" href="dist/output.css" />

      <div id='card' class='flex flex-col pl-12 pr-8 pb-12 pt-[52px] gap-3'>
        <img id='card-icon-src' class='size-8 mb-2'/>
        <span id='card-title' class='text-h6 text-blue-1000'></span>
        <span id='card-text' class='text-body-main text-blue-1000 text-opacity-70'></span>
      </div>
    `;
  }

  connectedCallback() {
    this.replacePropsInShadowRoot({
      iconSrc: this.getAttribute("iconSrc") || "",
      title: this.getAttribute("title") || "",
      text: this.getAttribute("text") || "",
    });
  }

  private replacePropsInShadowRoot({ iconSrc, text, title, cardColor }: CardProps) {
    const shadowRoot = this.shadowRoot;

    if (shadowRoot) {
      const card = shadowRoot.querySelector("#card");

      const icon: HTMLImageElement | null = shadowRoot.querySelector("#card-icon-src");
      icon!.src = iconSrc || "";

      shadowRoot.querySelector("#card-title")!.textContent = title || "";
      shadowRoot.querySelector("#card-text")!.textContent = text || "";

      cardColor?.split(" ").forEach(style => {
        card!.classList.add(style);
      });
    }
  }

  static get observedAttributes() {
    return ["title", "iconSrc", "text", "cardColor"];
  }

  attributeChangedCallback(oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.replacePropsInShadowRoot({
        iconSrc: this.getAttribute("iconSrc") || "",
        title: this.getAttribute("title") || "",
        text: this.getAttribute("text") || "",
        cardColor: this.getAttribute("cardColor") || "",
      });
    }
  }
}

customElements.define("card-component", Card);
