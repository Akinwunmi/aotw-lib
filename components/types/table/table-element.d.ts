import { LitElement, TemplateResult } from 'lit';
import { Column, Data } from './table';
export declare class TableElement extends LitElement {
    columns?: Column[];
    data?: Data[];
    uniqueKey?: string;
    private hiddenColumns;
    static styles: import("lit").CSSResult;
    render(): TemplateResult<1>;
    setColumns(): TemplateResult[] | undefined;
    setData(columnKey: string): TemplateResult[] | undefined;
    hideColumn(key: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_TABLE: TableElement;
    }
}
