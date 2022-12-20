import { LitElement, TemplateResult } from 'lit';
export declare class AotwTabGroup extends LitElement {
    private _activeLine;
    private _tabs;
    static styles: import("lit").CSSResult;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _setActive;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_TAB_GROUP: AotwTabGroup;
    }
}
