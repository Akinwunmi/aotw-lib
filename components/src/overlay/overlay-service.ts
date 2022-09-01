import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import { OverlayContainer } from './overlay-container';
import { OverlayConfig } from './overlay-container.model';
import { AotwOverlayPortal } from './overlay-portal';
import { OverlayRef } from './overlay-ref';

const AOTW_OVERLAY_PANEL = 'aotw-overlay-panel';

let uniqueId = 0;

export class OverlayService {
  public static create(config: OverlayConfig): OverlayRef {
    const host = this._createHost(config.location);
    const panel = this._createPanel(host);
    const portal = this._createPortal(panel);
    return new OverlayRef(portal, host, panel, config);
  }

  private static _createHost(location?: HTMLElement): HTMLDivElement {
    const host = document.createElement('div');
    OverlayContainer.getContainer(location).appendChild(host);
    return host;
  }

  private static _createPanel(host: HTMLDivElement): AotwOverlayPanel {
    const panel = document.createElement(AOTW_OVERLAY_PANEL) as AotwOverlayPanel;
    panel.id = `aotw-overlay-panel-${uniqueId++}`;
    host.appendChild(panel);
    return panel;
  }

  private static _createPortal(panel: AotwOverlayPanel) {
    const portal = new AotwOverlayPortal(panel);
    return portal;
  }
}

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
