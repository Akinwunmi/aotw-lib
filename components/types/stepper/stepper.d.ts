import { LitElement, TemplateResult } from 'lit';
export declare class AotwStepper extends LitElement {
    private steps;
    static styles: import("lit").CSSResult[];
    protected render(): TemplateResult;
    private onSlotChange;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_STEPPER: AotwStepper;
    }
}
