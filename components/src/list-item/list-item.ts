import { unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AotwContainer } from '../container';

import styleListItem from './list-item.scss?inline';

const AOTW_LIST_ITEM = 'aotw-list-item';

@customElement(AOTW_LIST_ITEM)
export class AotwListItem extends AotwContainer {
  @property({ type: Boolean })
  public disabled = false;

  public static override styles = [...AotwContainer.styles, unsafeCSS(styleListItem)];
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_LIST_ITEM: AotwListItem
  }
}
