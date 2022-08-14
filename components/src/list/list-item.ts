import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleListItem from './list-item.scss';

const AOTW_LIST_ITEM = 'aotw-list-item';

@customElement(AOTW_LIST_ITEM)
export class ListItemElement extends LitElement {
  public static override styles = unsafeCSS(styleListItem);

  protected override firstUpdated(): void {
    this.requestUpdate();
  }

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_LIST_ITEM: ListItemElement
  }
}
