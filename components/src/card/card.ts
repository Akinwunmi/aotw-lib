import { html, TemplateResult, unsafeCSS } from 'lit';
import { customElement, queryAssignedElements } from 'lit/decorators.js';

import { AotwContainer } from '../container';

import { AotwCardContent } from './card-content';
import { AotwCardHeader } from './card-header';
import styles from './card.scss?inline';

const AOTW_CARD = 'aotw-card';

@customElement(AOTW_CARD)
export class AotwCard extends AotwContainer {
  @queryAssignedElements()
  private _elements!: HTMLElement[];

  public static override styles = [...AotwContainer.styles, unsafeCSS(styles)];

  public render(): TemplateResult {
    return html`
      <slot @slotchange=${this._handleSlotChange}></slot>
    `;
  }

  private _handleSlotChange(): void {
    if (this._elements.length !== 2 || !this._elements.every(element =>
      element instanceof AotwCardHeader || element instanceof AotwCardContent
    )) {
      return;
    }

    const header = this._elements[0];
    let headerImage;
    if (header.lastElementChild?.getAttribute('header-image') !== null) {
      headerImage = header.lastElementChild as HTMLElement;
    }

    const content = this._elements.find(element => element instanceof AotwCardContent);
    if (headerImage && content) {
      headerImage.style.marginBottom = '0';
      content.style.paddingBlock = '0';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_CARD: AotwCard
  }
}
