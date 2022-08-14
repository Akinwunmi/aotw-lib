import { LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleScrim from './scrim.scss';

const AOTW_SCRIM = 'aotw-scrim';

@customElement(AOTW_SCRIM)
export class ScrimElement extends LitElement {
  public static override styles = unsafeCSS(styleScrim);
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_SCRIM: ScrimElement
  }
}
