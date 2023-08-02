import { LitElement, TemplateResult } from 'lit';
export declare class AotwStepper extends LitElement {
    private progress;
    private steps;
    static styles: import("lit").CSSResult[];
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private onSlotChange;
    private updateProgress;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_STEPPER: AotwStepper;
    }
}
