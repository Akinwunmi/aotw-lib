import { OverlayConfig } from './overlay-config';
import { AotwOverlayHost } from './overlay-host';
import { AotwOverlayPanel } from './overlay-panel';
import { OverlayPortal } from './overlay-portal';
import { OverlayPosition } from './overlay-position';

export class OverlayRef {
  private static _portal: OverlayPortal;
  private static _host: AotwOverlayHost;
  private static _panel: AotwOverlayPanel;
  private static _config: OverlayConfig;
  private static _position: OverlayPosition;

  public static get hostElement(): AotwOverlayHost {
    return OverlayRef._host;
  }

  public static get panelElement(): AotwOverlayPanel {
    return OverlayRef._panel;
  }

  public constructor(
    _portal: OverlayPortal,
    _host: AotwOverlayHost,
    _panel: AotwOverlayPanel,
    _config: OverlayConfig
  ) {
    OverlayRef._portal = _portal;
    OverlayRef._host = _host;
    OverlayRef._panel = _panel;
    OverlayRef._config = _config;
    OverlayRef._position = _config.position;
  }

  public static attach(element: HTMLElement): HTMLElement {
    if (this.hasAttached()) {
      throw new Error('Portal already has an element attached.');
    }
    
    if (this._position) {
      this._position.attach(element);
    }
    return this._portal.attach(element);
  }

  public static detach(): void {
    if (!this.hasAttached) return;

    return this._portal.detach();
  }

  public static remove(): void {
    this._portal.detach();
    this._host.remove();
  }

  public static hasAttached(): boolean {
    return this._portal.hasAttached();
  }

  public static getConfig(): OverlayConfig {
    return this._config;
  }
}
