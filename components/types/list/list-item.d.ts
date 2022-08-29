import { LitElement, TemplateResult } from 'lit';
export declare class ListItemElement extends LitElement {
    static styles: import("lit").CSSResult;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_LIST_ITEM: ListItemElement;
    }
}
