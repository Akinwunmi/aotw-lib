import { LitElement } from 'lit';
export declare class ToggleSwitchElement extends LitElement {
    active: boolean;
    disabled: boolean;
    static styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
    private _toggleActive;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_TOGGLE_SWITCH: ToggleSwitchElement;
    }
}
