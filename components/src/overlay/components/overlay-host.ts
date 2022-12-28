import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleOverlayHost from './overlay-host.scss?inline';

export const AOTW_OVERLAY_HOST = 'aotw-overlay-host';

@customElement(AOTW_OVERLAY_HOST)
export class AotwOverlayHost extends LitElement {
  public static override styles = unsafeCSS(styleOverlayHost);

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_OVERLAY_HOST: AotwOverlayHost
  }
}
