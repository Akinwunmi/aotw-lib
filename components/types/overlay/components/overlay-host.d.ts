import { LitElement, TemplateResult } from 'lit';
export declare const AOTW_OVERLAY_HOST = "aotw-overlay-host";
export declare class AotwOverlayHost extends LitElement {
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_OVERLAY_HOST: AotwOverlayHost;
    }
}
