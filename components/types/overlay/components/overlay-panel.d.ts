import { LitElement, TemplateResult } from 'lit';
export declare const AOTW_OVERLAY_PANEL = "aotw-overlay-panel";
export declare class AotwOverlayPanel extends LitElement {
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_OVERLAY_PANEL: AotwOverlayPanel;
    }
}
