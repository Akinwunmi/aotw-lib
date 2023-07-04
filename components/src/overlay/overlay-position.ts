import { AbsolutePosition, AbsolutePositionStyle, OffsetPosition, OffsetPositionStyle, Point, Positions, RelativePosition, RelativePositionStyle } from './overlay-position.model';
import { OverlayRef } from './overlay-ref';

export class OverlayPosition {
  private origin?: HTMLElement;
  private positions?: Positions;
  private overlayRef?: OverlayRef;

  private containerRect?: DOMRect;
  private originRect?: DOMRect;

  public setOrigin(origin: HTMLElement): OverlayPosition {
    this.origin = origin;
    return this;
  }

  public setPositions(positions: Positions): OverlayPosition {
    this.positions = positions;
    return this;
  }

  public attach(overlayRef: OverlayRef): void {
    this.overlayRef = overlayRef;

    if (!this.overlayRef) {
      return;
    }

    this.containerRect = document.querySelector('[aotw-overlay]')?.getBoundingClientRect();
    this.originRect = this.origin?.getBoundingClientRect();

    if (!this.containerRect) {
      return;
    }

    const absolutePosition = this.positions?.absolute;
    const relativePosition = this.positions?.relative;
    const offsetPosition = this.positions?.offset;

    if (absolutePosition) {
      this.applyAbsolutePosition(absolutePosition);
    }

    if (relativePosition && this.originRect) {
      const originPoint = this.getOriginPoint(this.originRect, relativePosition);
      this.applyRelativePosition(this.containerRect, originPoint, relativePosition);
    }

    if (offsetPosition) {
      this.applyOffsetPosition(offsetPosition);
    }
  }

  private getOriginPoint(originRect: DOMRect, relativePosition: RelativePosition): Point {
    let top, right, bottom, left;

    if (relativePosition.side === 'center') {
      top = originRect.top + originRect.height / 2;
      bottom = originRect.bottom + originRect.height / 2;
    } else {
      top = relativePosition.side === 'top' ? originRect.bottom : originRect.top;
      bottom = relativePosition.side === 'top' ? originRect.top : originRect.bottom;
    }

    if (relativePosition.startingPoint === 'center') {
      right = originRect.right + originRect.width / 2;
      left = originRect.left + originRect.width / 2;
    } else {
      right = relativePosition.side === 'left' ? originRect.right : originRect.left;
      left = relativePosition.side === 'left' ? originRect.left : originRect.right;
    }

    return { top, right, bottom, left };
  }

  private applyAbsolutePosition({ horizontal, vertical }: AbsolutePosition): void {
    const style: AbsolutePositionStyle = {
      'justify-content': '',
      'align-items': ''
    };

    switch (horizontal) {
      case 'left':
        style['justify-content'] = 'flex-start';
        break;
      case 'right':
        style['justify-content'] = 'flex-end';
        break;
      case 'center':
        style['justify-content'] = 'center';
        break;
      default:
        break;
    }

    switch (vertical) {
      case 'top':
        style['align-items'] = 'flex-start';
        break;
      case 'bottom':
        style['align-items'] = 'flex-end';
        break;
      case 'center':
        style['align-items'] = 'center';
        break;
      default:
        break;
    }

    this.setHostStyle(style);
  }

  private applyRelativePosition(containerRect: DOMRect, originPoint: Point, { side, startingPoint }: RelativePosition): void {
    const style: RelativePositionStyle = {
      'justify-content': '',
      'align-items': '',
      top: null,
      right: null,
      bottom: null,
      left: null,
      width: null,
      height: null
    };

    switch (side) {
      case 'top':
        style['align-items'] = 'flex-end';
        style.top = 0;
        style.height = originPoint.bottom;
        break;
      case 'right':
        style['justify-content'] = 'flex-start';
        style.left = originPoint.left;
        style.width = containerRect.width - originPoint.left;
        break;
      case 'bottom':
        style['align-items'] = 'flex-start';
        style.top = originPoint.bottom;
        style.height = containerRect.height - originPoint.bottom;
        break;
      case 'left':
        style['justify-content'] = 'flex-end';
        style.left = 0;
        style.width = originPoint.left;
        break;
      case 'center':
        style['align-items'] = 'center';
        style.top = originPoint.top - (originPoint.bottom - originPoint.top);
        style.height = originPoint.bottom - originPoint.top;
        break;
      default:
        break;
    }

    switch (startingPoint) {
      case 'start':
        if (side === 'left' || side === 'right') {
          style['align-items'] = 'flex-start';
          style.top = originPoint.top;
          style.height = containerRect.height - originPoint.bottom;
        } else {
          style['justify-content'] = 'flex-start';
          style.left = originPoint.right;
          style.width = containerRect.width - originPoint.right;
        }
        break;
      case 'end':
        if (side === 'left' || side === 'right') {
          style['align-items'] = 'flex-end';
          style.top = 0;
          style.height = originPoint.bottom;
        } else {
          style['justify-content'] = 'flex-end';
          style.left = 0;
          style.width = originPoint.left;
        }
        break;
      case 'center':
        style['justify-content'] = 'center';
        style.left = originPoint.left - (originPoint.right - originPoint.left);
        style.width = originPoint.right - originPoint.left;
        break;
      default:
        break;
    }

    this.setHostStyle(style);
  }

  private applyOffsetPosition({ x, y }: OffsetPosition): void {
    const style: OffsetPositionStyle = {
      transform: `translate(${x}px, ${y}px)`
    };

    this.setHostStyle(style);
  }

  private setHostStyle(style: AbsolutePositionStyle | RelativePositionStyle | OffsetPositionStyle): void {
    const hostStyle = this.overlayRef?.host.style;
    if (!hostStyle) {
      return;
    }

    const convertedStyle = Object.entries(style).map(([key, value]) => {
      if (value === null) {
        return [key, ''];
      }
      return [key, typeof value === 'string' ? value : `${value}px`];
    });

    Object.assign(hostStyle, Object.fromEntries(convertedStyle));
  }
}
