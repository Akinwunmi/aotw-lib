import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styleOverlayHost from './overlay-host.scss';
import { ElementPosition } from './overlay.model';

const AOTW_OVERLAY_HOST = 'aotw-overlay-host';

@customElement(AOTW_OVERLAY_HOST)
export class AotwOverlayHost extends LitElement {
  @property({ type: Object, reflect: true })
  public position?: ElementPosition;

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
