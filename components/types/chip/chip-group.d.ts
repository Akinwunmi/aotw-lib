import { LitElement, TemplateResult } from 'lit';
export declare class AotwChipGroup extends LitElement {
    private _chips;
    static styles: import("lit").CSSResult;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _setActive;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_CHIP_GROUP: AotwChipGroup;
    }
}
