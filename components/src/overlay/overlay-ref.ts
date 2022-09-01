import { OverlayConfig } from './overlay-container.model';
import { AotwOverlayPortal } from './overlay-portal';
import { AotwOverlayPanel } from './overlay-service';

export class OverlayRef {
  private static _portal: AotwOverlayPortal;
  private static _host: HTMLDivElement;
  private static _panel: AotwOverlayPanel;
  private static _config: OverlayConfig;

  constructor(
    _portal: AotwOverlayPortal,
    _host: HTMLDivElement,
    _panel: AotwOverlayPanel,
    _config: OverlayConfig
  ) {
    OverlayRef._portal = _portal;
    OverlayRef._host = _host;
    OverlayRef._panel = _panel;
    OverlayRef._config = _config;
  }

  public static attach(element: HTMLElement): HTMLElement {
    if (this.hasAttached()) {
      throw new Error('Portal already has an element attached.');
    }
    
    return this._portal.attach(element);
  }

  public static detach() {
  }

  public static hasAttached(): boolean {
    return this._portal.hasAttached();
  }
}
