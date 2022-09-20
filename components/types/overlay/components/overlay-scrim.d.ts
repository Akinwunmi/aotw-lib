import { LitElement, TemplateResult } from 'lit';
export declare const OVERLAY_SCRIM = "aotw-overlay-scrim";
export declare class AotwOverlayScrim extends LitElement {
    withBackground: boolean;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        OVERLAY_SCRIM: AotwOverlayScrim;
    }
}
