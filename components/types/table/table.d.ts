import { LitElement, TemplateResult } from 'lit';
import { Column, Data } from './table.model';
export declare class TableElement extends LitElement {
    columns?: Column[];
    data?: Data[];
    uniqueKey?: string;
    private _hiddenColumns;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult<1>;
    private _setColumns;
    private _setData;
    private _hideColumn;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_TABLE: TableElement;
    }
}
