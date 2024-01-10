class InquiryFrom extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `
        <link rel="stylesheet" href="dist/output.css" />

        <form
          id='inquiry-from'
          class="flex flex-col gap-4 items-center"
        >
          <input
            name="name"
            placeholder="Your Name"
            class='placeholder:text-blue-50 outline-none border-2 w-full border-[#ffffff0d] bg-blue-900 rounded-lg focus:border-blue-200 transition-colors pl-8 pt-4 pb-4'
          />
          <input
            placeholder="Email"
            required
            type="email"
            name="email"
            class='placeholder:text-blue-50 outline-none border-2 w-full border-[#ffffff0d] bg-blue-900 rounded-lg focus:border-blue-200 transition-colors pl-8 pt-4 pb-4'
          />
          <input
            placeholder="Paste your Figma design URL"
            name="disignURL"
            required
            class='placeholder:text-blue-50 outline-none border-2 w-full border-[#ffffff0d] bg-blue-900 rounded-lg focus:border-blue-200 transition-colors pl-8 pt-4 pb-4'
          />
          <button type='submit' class="w-full mt-10 mb-3 p-3 pl-9 pr-9 bg-yellow-90 rounded-4xl text-lb-1 text-blue-400 hover:text-blue-950 hover:bg-yellow-200">
            Send an Inquiry
          </button>
          <a>
            Get in touch with us
          </a>
        </form>
      `;

    const form: HTMLFormElement | null =
      shadowRoot.querySelector('#inquiry-from');

    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = [];
      for (var [key, value] of formData.entries()) {
        data.push({ key, value });
      }

      alert(JSON.stringify(data));
    });
  }
}

customElements.define('inquiry-from', InquiryFrom);
