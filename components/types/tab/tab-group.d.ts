import { LitElement, TemplateResult } from 'lit';
export declare class AotwTabGroup extends LitElement {
    set activeTab(activeTab: number);
    private _activeTab;
    private _activeLine;
    private _tabs;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
    private _handleSlotChange;
    private _setActive;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_TAB_GROUP: AotwTabGroup;
    }
}
