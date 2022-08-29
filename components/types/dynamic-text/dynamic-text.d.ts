import { LitElement, TemplateResult } from 'lit';
export declare class DynamicTextElement extends LitElement {
    alignment: 'left' | 'right';
    private _content;
    private _duration;
    private _interval;
    static styles: import("lit").CSSResult;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _setAnimation;
    private _setDurationAndInterval;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_DYNAMIC_TEXT: DynamicTextElement;
    }
}
