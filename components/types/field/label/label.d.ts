import { LitElement, TemplateResult } from 'lit';
export declare class AotwLabel extends LitElement {
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_LABEL: AotwLabel;
    }
}
