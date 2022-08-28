import { LitElement, TemplateResult } from 'lit';
export declare class TagElement extends LitElement {
    icon?: string;
    deletable: boolean;
    private _elements;
    static styles: import("lit").CSSResult;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _removeTagElement;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_TAG: TagElement;
    }
}
