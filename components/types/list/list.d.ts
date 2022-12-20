import { LitElement, TemplateResult } from 'lit';
export declare class ListElement extends LitElement {
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_LIST: ListElement;
    }
}
