import { TemplateResult, html, unsafeCSS, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styleListItem from './list-item.scss';

const AOTW_LIST_ITEM = 'aotw-list-item';

@customElement(AOTW_LIST_ITEM)
export class AotwListItem extends LitElement {
  @property({ type: Boolean })
  public disabled = false;

  public static override styles = unsafeCSS(styleListItem);

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_LIST_ITEM: AotwListItem
  }
}
