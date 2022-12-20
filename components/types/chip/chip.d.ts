import { LitElement, TemplateResult } from 'lit';
export declare class AotwChip extends LitElement {
    active: boolean;
    disabled: boolean;
    size: 'small' | 'medium';
    private _elements;
    static styles: import("lit").CSSResult;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _removeChipElement;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_CHIP: AotwChip;
    }
}
