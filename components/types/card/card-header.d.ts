import { LitElement, TemplateResult } from 'lit';
export declare class AotwCardHeader extends LitElement {
    private _elements;
    readonly elevated = true;
    static styles: import("lit").CSSResult;
    render(): TemplateResult;
    private _handleSlotChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_CARD_HEADER: AotwCardHeader;
    }
}
