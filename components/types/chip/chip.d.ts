import { LitElement, TemplateResult } from 'lit';
export declare class ChipElement extends LitElement {
    active: boolean;
    disabled: boolean;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
    private _toggleActive;
    private _removeChipElement;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_CHIP: ChipElement;
    }
}
