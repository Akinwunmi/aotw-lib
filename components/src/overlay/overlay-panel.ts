import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

const AOTW_OVERLAY_PANEL = 'aotw-overlay-panel';

@customElement(AOTW_OVERLAY_PANEL)
export class AotwOverlayPanel extends LitElement {
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
