import { LitElement, TemplateResult } from 'lit';
export declare class AotwChipGroup extends LitElement {
    private chips;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
    private onSlotChange;
    private setActive;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_CHIP_GROUP: AotwChipGroup;
    }
}
