import { OverlayPosition } from './overlay-position';
import { OverlayRef } from './overlay-ref';
import { OverlayConfig } from './overlay.model';
export declare class Overlay {
    private static instance?;
    private container;
    private host;
    private scrim;
    static get(): Overlay;
    create(config?: OverlayConfig): OverlayRef;
    position(): OverlayPosition;
    private createContainer;
    private createHost;
    private createPanel;
    private createScrim;
    private createElement;
}
