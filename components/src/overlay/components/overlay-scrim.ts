import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styleOverlayScrim from './overlay-scrim.scss';

export const OVERLAY_SCRIM = 'aotw-overlay-scrim';

@customElement(OVERLAY_SCRIM)
export class AotwOverlayScrim extends LitElement {
  @property({ type: Boolean, reflect: true })
  public withBackground = false;

  public static override styles = unsafeCSS(styleOverlayScrim);

  protected override render(): TemplateResult {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    OVERLAY_SCRIM: AotwOverlayScrim;
  }
}
