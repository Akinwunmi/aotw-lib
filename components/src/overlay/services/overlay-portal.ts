import { AotwOverlayPanel } from '../components/overlay-panel';

export class OverlayPortal {
  private _attachedElement?: Node;
  private _panel: AotwOverlayPanel;

  public constructor(panel: AotwOverlayPanel) {
    this._panel = panel;
  }

  public attach(element: HTMLElement): void {
    const elementOrNode = element && element instanceof HTMLTemplateElement
      ? element.content.cloneNode(true)
      : element;

    this._panel.appendChild(elementOrNode);
    this._attachedElement = elementOrNode;
  }

  public detach(): void {
    if (this._attachedElement) {
      this._panel.replaceChildren();
      this._attachedElement = undefined;
    }
  }

  public hasAttached(): boolean {
    return !!this._attachedElement;
  }
}
