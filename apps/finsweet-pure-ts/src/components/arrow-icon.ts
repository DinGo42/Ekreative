type ArrowProps = {
  color?: string;
};

class Arrow extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <svg class='mt-1' id='arrow-icon' width="25" height="12" viewBox="0 0 25 12" fill="#F4F6FC" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
      />
    </svg>
      
    `;
  }

  connectedCallback() {
    this.replacePropsInShadowRoot({
      color: this.getAttribute("color") || "",
    });
  }

  private replacePropsInShadowRoot({ color }: ArrowProps) {
    const shadowRoot = this.shadowRoot;

    if (shadowRoot) {
      const icon: SVGAElement | null = shadowRoot.querySelector("#arrow-icon");
      icon!.style.fill = color!;
    }
  }

  static get observedAttributes() {
    return ["color"];
  }

  attributeChangedCallback(oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.replacePropsInShadowRoot({
        color: this.getAttribute("color") || "",
      });
    }
  }
}

customElements.define("arrow-icon", Arrow);
