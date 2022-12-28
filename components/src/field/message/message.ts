import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleMessage from './message.scss?inline';

const AOTW_FIELD_MESSAGE = 'aotw-message';

@customElement(AOTW_FIELD_MESSAGE)
export class AotwFieldMessage extends LitElement {
  public static override styles = unsafeCSS(styleMessage);

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_FIELD_MESSAGE: AotwFieldMessage
  }
}
