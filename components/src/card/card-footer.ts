import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './card-footer.scss?inline';

const AOTW_CARD_FOOTER = 'aotw-card-footer';

@customElement(AOTW_CARD_FOOTER)
export class AotwCardFooter extends LitElement {
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
    AOTW_CARD_FOOTER: AotwCardFooter
  }
}
