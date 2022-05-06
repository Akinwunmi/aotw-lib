import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import tableStyles from './table-element.scss';
import { Column, Data } from './table';

const AOTW_TABLE = 'aotw-table';

@customElement(AOTW_TABLE)
export class TableElement extends LitElement {
  @property()
  columns?: Column[];

  @property()
  data?: Data[];

  @property()
  uniqueKey?: string;

  private hiddenColumns: string[] = [];

  static styles = unsafeCSS(tableStyles);

  render() {
    return html`
      <div class="table">
        ${this.setColumns()}
      </div>
    `;
  }

  setColumns(): TemplateResult[] | undefined {
    return this.columns?.map(column => {
      const classes = {
        hidden: this.hiddenColumns.includes(column.key)
      };

      return html`
        <div id=${column.key} class="table_column ${classMap(classes)}">
          <div class="table_column__header" @click=${() => this.hideColumn(column.key)}>
            ${column.name}
          </div>
          <div class="table_column__data">            
            ${this.setData(column.key)}
          </div>
        </div>
      `;
    });
  }

  setData(columnKey: string): TemplateResult[] | undefined {
    return this.data?.map(cell => {
      return html`
        <div class="cell">${cell[columnKey]}</div>
      `
    });
  }

  hideColumn(key: string) {
    const keyIndex = this.hiddenColumns.indexOf(key);
    keyIndex > -1
      ? this.hiddenColumns.splice(keyIndex, 1)
      : this.hiddenColumns.push(key);
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_TABLE: TableElement
  }
}