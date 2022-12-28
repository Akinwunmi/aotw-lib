import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleOverlayPanel from './overlay-panel.scss?inline';

export const AOTW_OVERLAY_PANEL = 'aotw-overlay-panel';

@customElement(AOTW_OVERLAY_PANEL)
export class AotwOverlayPanel extends LitElement {
  public static override styles = unsafeCSS(styleOverlayPanel);

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_OVERLAY_PANEL: AotwOverlayPanel
  }
}
