import { LitElement } from 'lit';
import { Icon } from '../icon/icon';
import { ButtonVariant } from './button';
export declare class ButtonElement extends LitElement {
    active: boolean;
    disabled: boolean;
    icon: Icon;
    ghost: boolean;
    outline: boolean;
    variant: ButtonVariant;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_BUTTON: ButtonElement;
    }
}
