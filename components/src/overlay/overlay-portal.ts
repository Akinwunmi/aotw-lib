import { AotwOverlayPanel } from './overlay-panel';

export class AotwOverlayPortal {
  private static _attachedElement?: HTMLElement;
  private static _portalOutlet: AotwOverlayPanel;

  constructor(
    _portalOutlet: AotwOverlayPanel
  ) {
    AotwOverlayPortal._portalOutlet = _portalOutlet;
  }

  public attach(element: HTMLElement): HTMLElement {
    AotwOverlayPortal._attachedElement = element;
    AotwOverlayPortal._portalOutlet.appendChild(element);
    return AotwOverlayPortal._attachedElement;
  }

  public detach(): void {
    if (!AotwOverlayPortal._attachedElement) return;
    
    AotwOverlayPortal._portalOutlet.removeChild(AotwOverlayPortal._attachedElement);
    AotwOverlayPortal._attachedElement = undefined;
  }

  public hasAttached(): boolean {
    return !!AotwOverlayPortal._attachedElement;
  }
}
