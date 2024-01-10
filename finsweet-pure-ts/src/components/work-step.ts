type WorkStepProps = {
  title: string;
  index: string;
  text: string;
};

class WorkStep extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // const container = document.createElement('div');

    // container.className = 'flex flex-col gap-2 h-full bg-red-800';

    // // Створення блока з картинкою та індексом
    // const imageContainer = document.createElement('div');
    // imageContainer.className =
    //   'relative flex items-center justify-center w-fit h-fit';

    // const image = document.createElement('img');
    // image.src = 'public/svgs/step.svg';

    // const indexSpan = document.createElement('span');
    // indexSpan.id = 'step-index';
    // indexSpan.className = 'absolute top-1 left-4 text-lb-1 text-white-1000';
    // indexSpan.textContent = '1';

    // imageContainer.appendChild(image);
    // imageContainer.appendChild(indexSpan);

    // // Створення блоків для заголовку та тексту
    // const titleSpan = document.createElement('span');
    // titleSpan.id = 'step-title';
    // titleSpan.className = 'text-sm text-blue-1000 mt-2';

    // const textSpan = document.createElement('span');
    // textSpan.id = 'step-text';
    // textSpan.className = 'text-bs-1 text-blue-1000 text-opacity-70';

    // // Додавання всіх елементів до основного контейнера
    // container.appendChild(imageContainer);
    // container.appendChild(titleSpan);
    // container.appendChild(textSpan);

    // // Додавання контейнера до DOM
    // shadowRoot.appendChild(container);

    shadowRoot.innerHTML = `
        <link rel="stylesheet" href="dist/output.css" />
        <div class="flex flex-col gap-2 h-full">
          <div class="relative flex items-center justify-center w-fit h-fit">
            <img src="public/svgs/step.svg" />
            <span id='step-index' class="absolute top-1 left-4 text-lb-1 text-white-1000">1</span>
          </div>
          <span id='step-title' class="text-sm text-blue-1000 mt-2"></span>
          <span id='step-text' class="text-bs-1 text-blue-1000 text-opacity-70"></span>
        </div>
      `;
  }

  connectedCallback() {
    this.replacePropsInShadowRoot({
      index: this.getAttribute('index') || '',
      title: this.getAttribute('title') || '',
      text: this.getAttribute('text') || '',
    });
  }

  private replacePropsInShadowRoot({ index, text, title }: WorkStepProps) {
    const shadowRoot = this.shadowRoot;

    if (shadowRoot) {
      shadowRoot.querySelector('#step-index')!.textContent = index || '';
      shadowRoot.querySelector('#step-title')!.textContent = title || '';
      shadowRoot.querySelector('#step-text')!.textContent = text || '';
    }
  }

  static get observedAttributes() {
    return ['title', 'index', 'text'];
  }

  attributeChangedCallback(oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.replacePropsInShadowRoot({
        index: this.getAttribute('index') || '',
        title: this.getAttribute('title') || '',
        text: this.getAttribute('text') || '',
      });
    }
  }
}

customElements.define('work-step', WorkStep);
