import { OverlayConfig } from './overlay.model';
import { OverlayPosition, OverlayRef } from './services';
export declare class Overlay {
    private static _instance;
    private _container;
    private _host;
    static getInstance(): Overlay;
    create(config?: OverlayConfig): OverlayRef;
    position(): OverlayPosition;
    private _createContainer;
    private _createHost;
    private _createPanel;
}
