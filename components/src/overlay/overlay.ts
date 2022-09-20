import { AotwOverlayHost, AotwOverlayPanel, AOTW_OVERLAY_HOST, AOTW_OVERLAY_PANEL } from './components';
import { OverlayConfig } from './overlay.model';
import { OverlayPortal, OverlayPosition, OverlayRef } from './services';

let PANEL_ID = 0;

export class Overlay {
  private static _instance: Overlay;

  private _container!: HTMLDivElement;
  private _host!: AotwOverlayHost;

  public static getInstance(): Overlay {
    if (!this._instance) {
      this._instance = new Overlay();
    }
    return this._instance;
  }

  public create(config?: OverlayConfig): OverlayRef {
    this._createContainer();
    this._createHost();
    const panel = this._createPanel();
    const portal = new OverlayPortal(panel);

    const overlayRef = new OverlayRef(this._container, this._host, panel, portal, config);

    return overlayRef;
  }

  public position() {
    return new OverlayPosition();
  }

  private _createContainer(): void {
    if (!this._container) {
      const container = document.createElement('div');
      container.className = 'aotw-overlay-container';
      this._container = container;
      document.body.appendChild(this._container);
    }
  }

  private _createHost(): void {
    this._host = document.createElement(AOTW_OVERLAY_HOST) as AotwOverlayHost;
    this._container.appendChild(this._host);
  }

  private _createPanel(): AotwOverlayPanel {
    const panel = document.createElement(AOTW_OVERLAY_PANEL) as AotwOverlayPanel;
    panel.id = `panel-${PANEL_ID++}`;
    this._host.appendChild(panel);

    return panel;
  }
}
