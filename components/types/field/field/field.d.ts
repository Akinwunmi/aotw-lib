import { LitElement, TemplateResult } from 'lit';
export declare class AotwField extends LitElement {
    private _disabled;
    set disabled(disabled: boolean);
    get disabled(): boolean;
    private _elements;
    static styles: import("lit").CSSResult;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _getInputAttributesAndRender;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_FIELD: AotwField;
    }
}
