import { LitElement, TemplateResult } from 'lit';
export declare class AotwCardFooter extends LitElement {
    readonly elevated = true;
    static styles: import("lit").CSSResult;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_CARD_FOOTER: AotwCardFooter;
    }
}
