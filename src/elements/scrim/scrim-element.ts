import { css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleScrim from './scrim-element.scss';

@customElement('aotw-scrim')
export class ScrimElement extends LitElement {
  static styles = [
    css`${unsafeCSS(styleScrim)}`
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'aotw-scrim': ScrimElement
  }
}