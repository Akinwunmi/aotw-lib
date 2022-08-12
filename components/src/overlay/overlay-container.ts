import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';

import styleOverlayContainer from './overlay-container.scss';
import { OverlayCloseEvent, OverlayOpenEvent, OverlayPosition } from './overlay-container.model';

const AOTW_OVERLAY_CONTAINER = 'aotw-overlay-container';

@customElement(AOTW_OVERLAY_CONTAINER)
export class OverlayContainerElement extends LitElement {
  @property()
  public position!: OverlayPosition;

  @queryAssignedElements()
  private _elements!: HTMLElement[];

  public static override styles = unsafeCSS(styleOverlayContainer);

  protected override render(): TemplateResult {
    return html`
      <slot @slotchange=${this.handleOpenOverlay}></slot>
    `;
  }

  private handleOpenOverlay(): void {
    if (!this._elements.length) return;
    const overlayOpen = new CustomEvent<OverlayOpenEvent>('overlay-open', {
      detail: {
        content: this._elements,
        position: this.position
      }
    });
    document.dispatchEvent(overlayOpen);
  }

  private close(): void {
    const overlayClose = new CustomEvent<OverlayCloseEvent>('overlay-close', {
      detail: {
        position: this.position
      }
    });
    document.dispatchEvent(overlayClose);
  }

  public override disconnectedCallback(): void {
    this.close();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_OVERLAY_CONTAINER: OverlayContainerElement
  }
}
