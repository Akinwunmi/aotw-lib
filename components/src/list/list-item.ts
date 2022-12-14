import { TemplateResult, html, unsafeCSS, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleListItem from './list-item.scss';

const AOTW_LIST_ITEM = 'aotw-list-item';

@customElement(AOTW_LIST_ITEM)
export class AotwListItem extends LitElement {
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
