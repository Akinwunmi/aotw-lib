import { PortalOptions } from './portal.model';
export declare class Portal {
    private _attached?;
    private parentElement;
    get attached(): HTMLElement | undefined;
    set attached(attached: HTMLElement | undefined);
    attach(element: HTMLElement, options?: PortalOptions): HTMLElement;
    close(): void;
    detach(): void;
}
