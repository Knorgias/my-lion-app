import { css, html, LitElement, ScopedElementsMixin } from 'ing-web/lit-2.js';

import { IngButton } from 'ing-web/button.js';

class MyLionApp extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'ing-button': IngButton,
    };
  }

  static get styles() {
    return [
      css`
        :host {
          padding: 0;
          margin: 0;
        }
      `,
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div style="text-align: center; margin: 0 auto; max-width: 700px">
        <h1>This is my-lion-app, a web app that uses @lion/ui</h1>
      </div>
      <ing-button>An ing-web-3 button</ing-button>
    `;
  }
}
customElements.define('my-lion-app', MyLionApp);
