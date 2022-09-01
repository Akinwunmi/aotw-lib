import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleOverlayContainer from './overlay-container.scss';

const AOTW_OVERLAY_CONTAINER = 'aotw-overlay-container';

@customElement(AOTW_OVERLAY_CONTAINER)
export class AotwOverlayContainer extends LitElement {
  public static override styles = unsafeCSS(styleOverlayContainer);

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_OVERLAY_CONTAINER: AotwOverlayContainer
  }
}
