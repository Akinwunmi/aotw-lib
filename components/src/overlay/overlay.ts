import { OverlayConfig } from './overlay-config';
import { AotwOverlayContainer } from './overlay-container';
import { AotwOverlayHost } from './overlay-host';
import { AotwOverlayPanel } from './overlay-panel';
import { OverlayPortal } from './overlay-portal';
import { OverlayPosition } from './overlay-position';
import { OverlayRef } from './overlay-ref';

let uniqueId = 0;

export class Overlay {
  private static _container?: AotwOverlayContainer;

  public static create(config: OverlayConfig): OverlayRef {
    const host = this._createHost();
    const panel = this._createPanel(host);
    const portal = this._createPortal(panel);
    const overlayConfig = new OverlayConfig(config);
    return new OverlayRef(portal, host, panel, overlayConfig);
  }

  public static position() {
    return new OverlayPosition();
  }

  private static _createContainer(): AotwOverlayContainer {
    const container = document.createElement('aotw-overlay-container') as AotwOverlayContainer;
    document.body.prepend(container);
    this._container = container;
    return this._container;
  }

  private static _createHost(): AotwOverlayHost {
    const host = document.createElement('aotw-overlay-host') as AotwOverlayHost;
    this.getContainer().appendChild(host);
    return host;
  }

  private static _createPanel(host: AotwOverlayHost): AotwOverlayPanel {
    const panel = document.createElement('aotw-overlay-panel') as AotwOverlayPanel;
    panel.id = `aotw-overlay-panel-${uniqueId++}`;
    host.appendChild(panel);
    return panel;
  }

  private static _createPortal(panel: AotwOverlayPanel) {
    const portal = new OverlayPortal(panel);
    return portal;
  }

  public static getContainer(): AotwOverlayContainer {
    if (!this._container) {
      return this._createContainer();
    }
    return this._container;
  }
}
