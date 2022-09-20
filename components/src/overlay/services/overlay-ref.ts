import { AotwOverlayHost, AotwOverlayPanel, AotwOverlayScrim, OVERLAY_SCRIM } from '../components';
import { OverlayConfig } from '../overlay.model';
import { OverlayPortal } from './overlay-portal';

export class OverlayRef {
  private _container: HTMLDivElement;
  private _portal: OverlayPortal;

  public config?: OverlayConfig;  
  public scrim?: AotwOverlayScrim;
  public host: AotwOverlayHost;
  public panel: AotwOverlayPanel;

  public constructor(
    container: HTMLDivElement,
    host: AotwOverlayHost,
    panel: AotwOverlayPanel,
    portal: OverlayPortal,
    config?: OverlayConfig
  ) {
    this.config = config;
    this._container = container;
    this.host = host;
    this.panel = panel;
    this._portal = portal;
  }

  public attach(element: HTMLElement): void {
    if (this.hasAttached()) {
      throw new Error('Portal already has an element attached.');
    }

    if (this.config) {
      if (!this.config.scrimCloseTrigger) {
        this.config.scrimCloseTrigger = 'click';
      }
      this.config.position?.attach(this);
    }

    this._attachScrim();
    this._portal.attach(element);
  }

  public detach(): void {
    this._portal.detach();
    this.scrim?.remove();
    this.scrim = undefined;
    this._container.style.pointerEvents = 'none';
  }

  public remove(): void {
    this.detach();
    while (this.host.children.length) {
      this.host.removeChild(this.host.children[0]);
    }
    this.host.remove();
  }

  public hasAttached(): boolean {
    return this._portal.hasAttached();
  }

  private _attachScrim(): void {
    if (this.config?.scrim || this.config?.scrimWithBackground) {
      this._container.style.pointerEvents = 'auto';
      this.scrim = document.createElement(OVERLAY_SCRIM) as AotwOverlayScrim;
      this.scrim.toggleAttribute('withBackground', this.config.scrimWithBackground || false);

      if (this.config.scrimCloseTrigger) {
        this.scrim.addEventListener(this.config.scrimCloseTrigger, this.detach.bind(this));
      }

      this.host.parentElement?.insertBefore(this.scrim, this.host);
    }
  }
}
