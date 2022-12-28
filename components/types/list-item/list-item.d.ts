import { TemplateResult, LitElement } from 'lit';
export declare class AotwListItem extends LitElement {
    disabled: boolean;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_LIST_ITEM: AotwListItem;
    }
}
