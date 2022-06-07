import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styleInput from './input.scss';

const AOTW_INPUT = 'aotw-input';

@customElement(AOTW_INPUT)
export class AotwInput extends LitElement {
  @property({ type: String })
  label?: string;

  static styles = unsafeCSS(styleInput);
  
  render() {
    const labelHTML = this.label
      ? html`<label for="input">${this.label}</label>`
      : undefined;

    return html`
      ${labelHTML}
      <input type="text" id="input" />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_INPUT: AotwInput
  }
}