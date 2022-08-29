import { LitElement, TemplateResult } from 'lit';
export declare class AotwTab extends LitElement {
    disabled: boolean;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_TAB: AotwTab;
    }
}
