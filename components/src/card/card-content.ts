import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './card-content.scss?inline';

const AOTW_CARD_CONTENT = 'aotw-card-content';

@customElement(AOTW_CARD_CONTENT)
export class AotwCardContent extends LitElement {
  public readonly elevated = true;

  public static override styles = unsafeCSS(styles);

  public render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_CARD_CONTENT: AotwCardContent
  }
}
