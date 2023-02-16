import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, queryAssignedElements } from 'lit/decorators.js';

import styles from './card-header.scss?inline';

const AOTW_CARD_HEADER = 'aotw-card-header';

@customElement(AOTW_CARD_HEADER)
export class AotwCardHeader extends LitElement {
  @queryAssignedElements()
  private _elements!: HTMLElement[];

  public readonly elevated = true;

  public static override styles = unsafeCSS(styles);

  public render(): TemplateResult {
    return html`
      <slot @slotchange=${this._handleSlotChanged}></slot>
    `;
  }

  private _handleSlotChanged(): void {
    console.log('changed');
    const image = this._elements.find(element => element instanceof HTMLImageElement);
    this._elements.forEach(element => {
      if (element.getAttribute('header-prefix') !== null || element.getAttribute('header-title') !== null) {
        element.style.gridRow = image ? '2' : '-1';
      }
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_CARD_HEADER: AotwCardHeader
  }
}
