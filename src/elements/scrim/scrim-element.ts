import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleScrim from './scrim-element.scss';

@customElement('aotw-scrim')
export class ScrimElement extends LitElement {
  static styles = [styleScrim];
}

declare global {
  interface HTMLElementTagNameMap {
    'aotw-scrim': ScrimElement
  }
}