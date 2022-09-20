import { Positions } from '../overlay.model';
import { OverlayRef } from './overlay-ref';
export declare class OverlayPosition {
    private _origin?;
    private _positions?;
    private _overlayRef?;
    private _containerRect?;
    private _originRect?;
    private _minimumDistanceFromEdge;
    setOrigin(origin: HTMLElement): OverlayPosition;
    setPositions(positions: Positions): OverlayPosition;
    attach(overlayRef: OverlayRef): void;
    apply(): void;
    private _getOriginPoint;
    private _applyRelativePosition;
    private _applyAbsolutePosition;
    private _applyOffsetPosition;
    private _setMinimumDistanceToEdge;
    private _updateRelativePosition;
}
