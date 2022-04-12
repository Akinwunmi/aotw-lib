import { LitElement } from 'lit';
export declare class ChipElement extends LitElement {
    active: boolean;
    disabled: boolean;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private toggleActive;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_CHIP: ChipElement;
    }
}
