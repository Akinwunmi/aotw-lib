import { LitElement } from 'lit';
import { Icon } from '../icon/icon';
export declare class ToggleButtonElement extends LitElement {
    active: boolean;
    disabled: boolean;
    icon?: Icon;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    toggleActive(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_TOGGLE_BUTTON: ToggleButtonElement;
    }
}
