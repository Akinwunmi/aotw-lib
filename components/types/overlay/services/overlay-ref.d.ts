import { AotwOverlayHost, AotwOverlayPanel, AotwOverlayScrim } from '../components';
import { OverlayConfig } from '../overlay.model';
import { OverlayPortal } from './overlay-portal';
export declare class OverlayRef {
    private _container;
    private _portal;
    config?: OverlayConfig;
    scrim?: AotwOverlayScrim;
    host: AotwOverlayHost;
    panel: AotwOverlayPanel;
    constructor(container: HTMLDivElement, host: AotwOverlayHost, panel: AotwOverlayPanel, portal: OverlayPortal, config?: OverlayConfig);
    attach(element: HTMLElement): void;
    detach(): void;
    remove(): void;
    hasAttached(): boolean;
    private _attachScrim;
}
