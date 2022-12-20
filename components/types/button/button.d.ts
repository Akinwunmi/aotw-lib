import { LitElement, TemplateResult } from 'lit';
import { ButtonVariant } from './button.model';
export declare const AOTW_BUTTON = "aotw-button";
export declare class ButtonElement extends LitElement {
    active: boolean;
    disabled: boolean;
    ghost: boolean;
    outline: boolean;
    variant: ButtonVariant;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_BUTTON: ButtonElement;
    }
}
