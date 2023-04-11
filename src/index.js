import './my-input';
import { LitElement, html } from 'lit';

class MyLionApp extends LitElement {
  render() {
    return html`
      <div style="text-align: center; margin: 0 auto; max-width: 700px">
        <h1>my-lion-app</h1>
        <my-input></my-input>
      </div>
    `;
  }
}
customElements.define('my-lion-app', MyLionApp);
