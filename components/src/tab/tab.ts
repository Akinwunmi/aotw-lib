import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styleTab from './tab.scss';

const AOTW_TAB = 'aotw-tab';

@customElement(AOTW_TAB)
export class AotwTab extends LitElement {
  @property({ type: Boolean })
  public disabled = false;

  public static override styles = unsafeCSS(styleTab);

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_TAB: AotwTab
  }
}
