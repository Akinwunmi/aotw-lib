import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleCloseButton from './close-button.scss';

const AOTW_CLOSE_BUTTON = 'aotw-close-button';

@customElement(AOTW_CLOSE_BUTTON)
export class CloseButtonElement extends LitElement {
  static override styles = unsafeCSS(styleCloseButton);

  public override render() {
    return html`
      <button class="close-button" part="button"></button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_CLOSE_BUTTON: CloseButtonElement
  }
}