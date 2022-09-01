import { OverlayConfig } from './overlay.model';
import { AotwOverlayHost } from './overlay-host';
import { AotwOverlayPanel } from './overlay-panel';
import { AotwOverlayPortal } from './overlay-portal';

export class AotwOverlayRef {
  private static _portal: AotwOverlayPortal;
  private static _host: AotwOverlayHost;
  private static _panel: AotwOverlayPanel;
  private static _config: OverlayConfig;

  constructor(
    _portal: AotwOverlayPortal,
    _host: AotwOverlayHost,
    _panel: AotwOverlayPanel,
    _config: OverlayConfig
  ) {
    AotwOverlayRef._portal = _portal;
    AotwOverlayRef._host = _host;
    AotwOverlayRef._panel = _panel;
    AotwOverlayRef._config = _config;
  }

  public static attach(element: HTMLElement): HTMLElement {
    if (this.hasAttached()) {
      throw new Error('Portal already has an element attached.');
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
