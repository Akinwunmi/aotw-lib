import { LitElement, TemplateResult } from 'lit';
export declare class DialogElement extends LitElement {
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
    private _close;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_DIALOG: DialogElement;
    }
}
