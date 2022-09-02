import { Overlay } from './overlay';
import { ElementPosition, OriginPosition } from './overlay.model';
import { AotwOverlayHost } from './overlay-host';
import { OverlayRef } from './overlay-ref';
import { AotwOverlayPanel } from './overlay-panel';

export class OverlayPosition {
  private _boundingBox?: AotwOverlayHost;
  private _containerRect?: DOMRect;
  private _origin?: HTMLElement;
  private _originRect?: DOMRect;
  private _overlayRect?: DOMRect;
  private _viewportRect?: DOMRect;

  public attach(origin?: HTMLElement): void {
    OverlayRef.hostElement.classList.add('aotw-overlay-position-bounding-box');
    this._boundingBox = OverlayRef.hostElement;
    this._origin = origin;
  
    this.apply();
  }

  public apply(): void {
    const origin = this._origin;
    this._originRect = origin?.getBoundingClientRect();
    this._overlayRect = OverlayRef.panelElement.getBoundingClientRect();
    this._viewportRect = this._getViewportRect();
    this._containerRect = Overlay.getContainer().getBoundingClientRect();

    const originRect = this._originRect;
    const overlayRect = this._overlayRect;
    const viewportRect = this._viewportRect;
    const containerRect = this._containerRect;
    if (originRect) {
      // ! Replace object with input from origin
      const originPosition = this._getOriginPosition(originRect, {
        originX: 'right', originY: 'bottom'
      });
      const panels = this._boundingBox?.querySelectorAll('aotw-overlay-panel');
      panels?.forEach(panel => 
        // ! WIP -> temporary for testing connection
        (panel as AotwOverlayPanel).style.border = '2px solid green'
      );
    }
  }

  private _getOriginPosition(originRect: DOMRect, position: OriginPosition): ElementPosition {
    let x: number;
    let y: number;

    if (position.originX === 'center') {
      x = originRect.left + originRect.width / 2;
    } else {
      x = position.originX === 'left' ? originRect.left : originRect.right;
    }

    if (position.originY === 'center') {
      y = originRect.top + originRect.height / 2;
    } else {
      y = position.originY === 'top' ? originRect.top : originRect.bottom;
    }

    return { x, y };
  }

  private _getViewportRect(): DOMRect {
    const { clientHeight, clientWidth, offsetTop, offsetLeft } = document.documentElement;
    return {
      height: clientHeight,
      width: clientWidth,
      x: offsetTop,
      y: offsetLeft
    } as DOMRect;
  }
}
