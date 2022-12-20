import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleError from './error.scss';

const AOTW_FIELD_ERROR = 'aotw-error';

@customElement(AOTW_FIELD_ERROR)
export class AotwFieldError extends LitElement {
  public static override styles = unsafeCSS(styleError);

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_FIELD_ERROR: AotwFieldError
  }
}
