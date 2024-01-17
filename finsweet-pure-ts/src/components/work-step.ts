type WorkStepProps = {
  title: string;
  index: string;
  text: string;
};

class WorkStep extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
        <link rel="stylesheet" href="dist/output.css" />
        <div class="flex flex-col gap-2 h-full">
          <div class="relative flex items-center justify-center w-fit h-fit">
            <img src="/svgs/step.svg" />
            <span id='step-index' class="absolute top-1 left-4 text-label-main text-white-1000">1</span>
          </div>
          <span id='step-title' class="text-h5 text-blue-1000 mt-2"></span>
          <span id='step-text' class="text-body-main text-blue-1000 text-opacity-70"></span>
        </div>
      `;
  }

  connectedCallback() {
    this.replacePropsInShadowRoot({
      index: this.getAttribute("index") || "",
      title: this.getAttribute("title") || "",
      text: this.getAttribute("text") || "",
    });
  }

  private replacePropsInShadowRoot({ index, text, title }: WorkStepProps) {
    const shadowRoot = this.shadowRoot;

    if (shadowRoot) {
      shadowRoot.querySelector("#step-index")!.textContent = index || "";
      shadowRoot.querySelector("#step-title")!.textContent = title || "";
      shadowRoot.querySelector("#step-text")!.textContent = text || "";
    }
  }

  static get observedAttributes() {
    return ["title", "index", "text"];
  }

  attributeChangedCallback(oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.replacePropsInShadowRoot({
        index: this.getAttribute("index") || "",
        title: this.getAttribute("title") || "",
        text: this.getAttribute("text") || "",
      });
    }
  }
}

customElements.define("work-step", WorkStep);
