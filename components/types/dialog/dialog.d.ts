import { LitElement, TemplateResult } from 'lit';
import '../scrim';
export declare class DialogElement extends LitElement {
    scrim: boolean;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
    private _close;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_DIALOG: DialogElement;
    }
}
