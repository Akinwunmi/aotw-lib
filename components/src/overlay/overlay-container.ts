import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';

import styleOverlayContainer from './overlay-container.scss';
import { ElementPosition, OverlayOpenEvent } from './overlay-container.model';

const AOTW_OVERLAY_CONTAINER = 'aotw-overlay-container';

@customElement(AOTW_OVERLAY_CONTAINER)
export class OverlayContainerElement extends LitElement {
  @property({ type: Boolean })
  public set close(close: boolean) {
    if (close) {
      this.closeOverlay();
    }
  }

  @property({ type: Boolean })
  public disableClickOutside = false;

  @property({ type: String })
  public name?: string;

  @property({ type: Object })
  public position?: ElementPosition;

  @query('slot')
  private _slot!: HTMLSlotElement;

  @queryAssignedElements()
  private _elements!: HTMLElement[];

  public static override styles = unsafeCSS(styleOverlayContainer);

  protected override firstUpdated(): void {
    this.addEventListener('click', this.handleClickOutside);
    this._slot.addEventListener('click', this.handleClickInside);
  }

  protected override render(): TemplateResult {
    return html`
      <slot @slotchange=${this.openOverlay}></slot>
    `;
  }

  private handleClickOutside(): void {
    this.close = true;
  }

  private handleClickInside(e: Event): void {
    e.stopPropagation();
  }

  private openOverlay(): void {
    if (!this._elements.length) return;
    this.style.pointerEvents = this.disableClickOutside ? 'none' : 'visible';

    const overlayOpen = new CustomEvent<OverlayOpenEvent>('overlay-open', {
      detail: {
        content: this._elements,
        position: this.position
      }
    });
    document.dispatchEvent(overlayOpen);
  }

  private closeOverlay(): void {
    this.position = undefined;
    this.style.pointerEvents = 'none';

    let child = this.lastElementChild;
    while (child) {
      this.removeChild(child);
      child = this.lastElementChild;
    }

    const overlayClosed = new CustomEvent('overlay-closed', {
      detail: {}
    });
    document.dispatchEvent(overlayClosed);
  }

  public override disconnectedCallback(): void {
    this.removeEventListener('click', this.handleClickOutside, false);
    this._slot.removeEventListener('click', this.handleClickInside, false);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_OVERLAY_CONTAINER: OverlayContainerElement
  }
}
