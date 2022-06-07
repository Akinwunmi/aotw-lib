import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleInput from './input.scss';

const AOTW_INPUT = 'aotw-input';

@customElement(AOTW_INPUT)
export class AotwInput extends LitElement {
  static styles = unsafeCSS(styleInput);
  
  render() {
    return html`
      <input type="text" />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_INPUT: AotwInput
  }
}