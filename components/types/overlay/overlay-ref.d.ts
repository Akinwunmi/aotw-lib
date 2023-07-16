import { Portal } from '../portal';
import { OverlayConfig } from './overlay.model';
export declare class OverlayRef {
    host: HTMLDivElement;
    private panel;
    private portal;
    private scrim;
    private config?;
    get attached(): HTMLElement | undefined;
    constructor(host: HTMLDivElement, panel: HTMLDivElement, portal: Portal, scrim: HTMLDivElement, config?: OverlayConfig);
    attach(element: HTMLElement): HTMLElement;
    close(): void;
    detach(): void;
    private showScrim;
    private hideScrim;
}
