import { Positions } from './overlay-position.model';
import { OverlayRef } from './overlay-ref';
export declare class OverlayPosition {
    private origin?;
    private positions?;
    private overlayRef?;
    private containerRect?;
    private originRect?;
    setOrigin(origin: HTMLElement): OverlayPosition;
    setPositions(positions: Positions): OverlayPosition;
    attach(overlayRef: OverlayRef): void;
    private getOriginPoint;
    private applyAbsolutePosition;
    private applyRelativePosition;
    private applyOffsetPosition;
    private setHostStyle;
}
