import { AotwOverlayPanel } from './overlay-panel';

export class OverlayPortal {
  private _attachedElement?: HTMLElement;
  private _portalOutlet: AotwOverlayPanel;

  constructor(
    _portalOutlet: AotwOverlayPanel
  ) {
    this._portalOutlet = _portalOutlet;
  }

  public attach(element: HTMLElement): HTMLElement {
    this._attachedElement = element;
    this._portalOutlet.appendChild(element);
    return this._attachedElement;
  }

  public detach(): void {
    if (!this._attachedElement) return;
    
    this._portalOutlet.removeChild(this._attachedElement);
    this._attachedElement = undefined;
  }

  public hasAttached(): boolean {
    return !!this._attachedElement;
  }
}
