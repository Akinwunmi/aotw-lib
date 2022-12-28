import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleLabel from './label.scss?inline';

const AOTW_LABEL = 'aotw-label';

@customElement(AOTW_LABEL)
export class AotwLabel extends LitElement {
  public static override styles = unsafeCSS(styleLabel);

  protected override render(): TemplateResult {
    return html`
      <label class="label"><slot></slot></label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_LABEL: AotwLabel
  }
}
