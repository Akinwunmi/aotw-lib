import { LitElement, TemplateResult } from 'lit';
export declare class AotwStep extends LitElement {
    active: boolean;
    complete: boolean;
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    protected updated(): void;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_STEP: AotwStep;
    }
}
