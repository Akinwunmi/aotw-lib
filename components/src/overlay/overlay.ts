import { OverlayConfig } from './overlay.model';
import { AotwOverlayHost } from './overlay-host';
import { AotwOverlayPanel } from './overlay-panel';
import { AotwOverlayPortal } from './overlay-portal';
import { AotwOverlayRef } from './overlay-ref';

let uniqueId = 0;

export class AotwOverlay {
  private static _container?: HTMLElement;

  public static create(config: OverlayConfig): AotwOverlayRef {
    const host = this._createHost(config.location);
    const panel = this._createPanel(host);
    const portal = this._createPortal(panel);
    return new AotwOverlayRef(portal, host, panel, config);
  }

  private static _createContainer(location?: HTMLElement): HTMLElement {
    const container = document.createElement('aotw-overlay-container');
    (location || document.body).prepend(container);
    this._container = container;
    return this._container;
  }

  private static _createHost(location?: HTMLElement): AotwOverlayHost {
    const host = document.createElement('aotw-overlay-host') as AotwOverlayHost;
    this._getContainer(location).appendChild(host);
    return host;
  }

  private static _createPanel(host: AotwOverlayHost): AotwOverlayPanel {
    const panel = document.createElement('aotw-overlay-panel') as AotwOverlayPanel;
    panel.id = `aotw-overlay-panel-${uniqueId++}`;
    host.appendChild(panel);
    return panel;
  }

  private static _createPortal(panel: AotwOverlayPanel) {
    const portal = new AotwOverlayPortal(panel);
    return portal;
  }

  private static _getContainer(location?: HTMLElement): HTMLElement {
    if (!this._container) {
      return this._createContainer(location);
    }
    return this._container;
  }
}
