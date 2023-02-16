import { unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AotwContainer } from '../container';

import styles from './card.scss?inline';

const AOTW_CARD = 'aotw-card';

@customElement(AOTW_CARD)
export class AotwCard extends AotwContainer {
  public readonly elevated = true;

  public static override styles = [...AotwContainer.styles, unsafeCSS(styles)];
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_CARD: AotwCard
  }
}
