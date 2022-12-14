import { Point, PositionAxes, Positions } from '../overlay.model';
import { applyStyles, transformCssValue } from '../overlay.utils';
import { OverlayRef } from './overlay-ref';

export class OverlayPosition {
  private _origin?: HTMLElement;
  private _positions?: Positions;
  private _overlayRef?: OverlayRef;

  private _containerRect?: DOMRect;
  private _originRect?: DOMRect;

  private _minimumDistanceFromEdge = 0;

  // Origin to attach the overlay element to
  public setOrigin(origin: HTMLElement): OverlayPosition {
    this._origin = origin;
    return this;
  }

  // Define custom positions when the overlay element has to be positioned other then in the center
  public setPositions(positions: Positions): OverlayPosition {
    this._positions = positions;
    return this;
  }

  public attach(overlayRef: OverlayRef): void {
    this._overlayRef = overlayRef;

    this.apply();
  }

  public apply(): void {
    if (!this._overlayRef) {
      return;
    }

    this._setMinimumDistanceToEdge();

    this._containerRect = document.querySelector('.aotw-overlay-container')?.getBoundingClientRect();
    this._originRect = this._origin?.getBoundingClientRect();

    const containerRect = this._containerRect;
    const originRect = this._originRect;

    const relativePosition = this._positions?.relative;
    const absolutePosition = this._positions?.absolute;
    const offsetPosition = this._positions?.offset;

    if (containerRect) {
      if (offsetPosition) {
        this._applyOffsetPosition(offsetPosition);
      }
      if (relativePosition && originRect) {
        const updatedRelativePosition = this._updateRelativePosition(containerRect, originRect, relativePosition);
        const originPoint = this._getOriginPoint(originRect, updatedRelativePosition);
        this._applyRelativePosition(containerRect, originPoint, updatedRelativePosition);
        return;
      }
      if (absolutePosition) {
        this._applyAbsolutePosition(absolutePosition);
      }
    }
  }

  private _getOriginPoint(originRect: DOMRect, relativePosition: PositionAxes): Point {
    let x, y;

    if (relativePosition.horizontal === 'center') {
      x = originRect.left + originRect.width / 2;
    } else {
      x = relativePosition.horizontal === 'start' ? originRect.left : originRect.right;
    }

    if (relativePosition.vertical === 'center') {
      y = originRect.top + originRect.height / 2;
    } else {
      y = relativePosition.vertical === 'start' ? originRect.top : originRect.bottom;
    }

    return { x, y };
  }

  private _applyRelativePosition(containerRect: DOMRect, originPoint: Point, relativePosition: PositionAxes): void {
    let top, right, bottom, left, width, height;
    const styles: Partial<CSSStyleDeclaration> = {};

    switch (relativePosition.vertical) {
      case 'start':
        styles.alignItems = 'flex-end';
        bottom = containerRect.height - originPoint.y;
        height = containerRect.height - bottom;
        break;
      case 'end':
        styles.alignItems = 'flex-start';
        top = originPoint.y;
        height = containerRect.height - top;
        break;
      case 'center':
        styles.alignItems = 'center';
        height = originPoint.y * 2;
        top = 0;
        break;
      default:
        break;
    }

    switch (relativePosition.horizontal) {
      case 'start':
        styles.justifyContent = 'flex-start';
        left = originPoint.x;
        width = containerRect.right - originPoint.x;
        break;
      case 'end':
        styles.justifyContent = 'flex-end';
        right = containerRect.width - originPoint.x;
        width = originPoint.x;
        break;
      case 'center':
        styles.justifyContent = 'center';
        width = originPoint.x * 2;
        left = 0;
        break;
      default:
        break;
    }

    styles.top = transformCssValue(top);
    styles.bottom = transformCssValue(bottom);
    styles.left = transformCssValue(left);
    styles.right = transformCssValue(right);
    styles.width = transformCssValue(width);
    styles.height = transformCssValue(height);

    const hostStyle = this._overlayRef?.host.style;
    if (hostStyle) {
      applyStyles(hostStyle, styles as CSSStyleDeclaration);
    }
  }

  private _applyAbsolutePosition(absolutePosition: PositionAxes): void {
    const styles: Partial<CSSStyleDeclaration> = {};

    switch (absolutePosition.vertical) {
      case 'start':
        styles.alignItems = 'flex-start';
        break;
      case 'end':
        styles.alignItems = 'flex-end';
        break;
      case 'center':
        styles.alignItems = 'center';
        break;
      default:
        break;
    }

    switch (absolutePosition.horizontal) {
      case 'start':
        styles.justifyContent = 'flex-start';
        break;
      case 'end':
        styles.justifyContent = 'flex-end';
        break;
      case 'center':
        styles.justifyContent = 'center';
        break;
      default:
        break;
    }

    const hostStyle = this._overlayRef?.host.style;
    if (hostStyle) {
      applyStyles(hostStyle, styles as CSSStyleDeclaration);
    }
  }

  private _applyOffsetPosition(offsetPosition: Point): void {
    const styles: Partial<CSSStyleDeclaration> = {
      transform: `translate(${offsetPosition.x}px, ${offsetPosition.y}px)`,
    };

    const hostStyle = this._overlayRef?.host.style;
    if (hostStyle) {
      applyStyles(hostStyle, styles as CSSStyleDeclaration);
    }
  }

  private _setMinimumDistanceToEdge(): void {
    const computedDocumentStyle = getComputedStyle(document.documentElement);
    const fontSize = Number(computedDocumentStyle.fontSize.replace('px', ''));
    const multiplier = Number(computedDocumentStyle.getPropertyValue('--aotw-overlay-container-padding').replace('rem', ''));
    this._minimumDistanceFromEdge = fontSize * multiplier;
  }

  private _updateRelativePosition(containerRect: DOMRect, originRect: DOMRect, relativePosition: PositionAxes): PositionAxes {
    if (relativePosition.vertical === 'start' && originRect.y < this._minimumDistanceFromEdge) {
      relativePosition.vertical = 'end';
    }

    if (relativePosition.vertical === 'end' && containerRect.bottom - originRect.bottom < this._minimumDistanceFromEdge) {
      relativePosition.vertical = 'start';
    }

    if (relativePosition.horizontal === 'start' && containerRect.right - originRect.right < this._minimumDistanceFromEdge) {
      relativePosition.horizontal = 'end';
    }

    if (relativePosition.horizontal === 'end' && originRect.x < this._minimumDistanceFromEdge) {
      relativePosition.horizontal = 'start';
    }

    return relativePosition;
  }
}
