import { LitElement, TemplateResult } from 'lit';
import { InputMessage } from './input.model';
export declare class AotwInput extends LitElement {
    label?: string;
    message?: InputMessage;
    placeholder?: string;
    value?: string;
    private input;
    static styles: import("lit").CSSResult;
    firstUpdated(): void;
    render(): TemplateResult;
    private updateInputValue;
    private removeValue;
    private handleBlur;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_INPUT: AotwInput;
    }
}
