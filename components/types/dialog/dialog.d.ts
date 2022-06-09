import { LitElement } from 'lit';
import '../close-button';
import '../scrim';
export declare class DialogElement extends LitElement {
    dialogTitle: string;
    scrim: boolean;
    closed: Event;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    close(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_DIALOG: DialogElement;
    }
}
