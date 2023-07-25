import { LitElement, TemplateResult } from 'lit';
export declare class AotwStep extends LitElement {
    active: boolean;
    complete: boolean;
    static styles: import("lit").CSSResult[];
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_STEP: AotwStep;
    }
}
