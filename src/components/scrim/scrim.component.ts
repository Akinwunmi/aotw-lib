import { css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleScrim from './scrim.component.scss';

@customElement('aotw-scrim')
export class ScrimComponent extends LitElement {
  static styles = [
    css`${unsafeCSS(styleScrim)}`
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'aotw-scrim': ScrimComponent
  }
}