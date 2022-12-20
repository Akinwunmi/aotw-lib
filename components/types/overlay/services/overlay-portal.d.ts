import { AotwOverlayPanel } from '../components/overlay-panel';
export declare class OverlayPortal {
    private _attachedElement?;
    private _panel;
    constructor(panel: AotwOverlayPanel);
    attach(element: HTMLElement): void;
    detach(): void;
    hasAttached(): boolean;
}
