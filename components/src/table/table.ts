import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import tableStyles from './table.scss';
import { Column, Data } from './table.model';

const AOTW_TABLE = 'aotw-table';

@customElement(AOTW_TABLE)
export class TableElement extends LitElement {
  @property({ type: Array })
  public columns?: Column[];

  @property({ type: Array })
  public data?: Data[];

  @property({ type: String })
  public uniqueKey?: string;

  private _hiddenColumns: string[] = [];

  public static override styles = unsafeCSS(tableStyles);

  protected override render() {
    return html`
      <div class="table">
        ${this._setColumns()}
      </div>
    `;
  }

  private _setColumns(): TemplateResult[] | undefined {
    return this.columns?.map(column => {
      const classes = {
        hidden: this._hiddenColumns.includes(column.key)
      };

      return html`
        <div id=${column.key} class="table_column ${classMap(classes)}">
          <div
            class="table_column__header"
            title=${column.name}
            @click=${this._hideColumn.bind(column.key)}
          >
            <span>${column.parent}</span>
            ${column.abbreviation ?? column.name}
          </div>
          <div class="table_column__data">            
            ${this._setData(column.key)}
          </div>
        </div>
      `;
    });
  }

  private _setData(columnKey: string): TemplateResult[] | undefined {
    return this.data?.map(cell => {
      const value = cell[columnKey] ?? '';
      const icon = html`<aotw-icon name=${String(value)}></aotw-icon>`;

      return html`
        <div class="cell">${icon}</div>
      `;
    });
  }

  private _hideColumn(key: string) {
    const keyIndex = this._hiddenColumns.indexOf(key);
    keyIndex > -1
      ? this._hiddenColumns.splice(keyIndex, 1)
      : this._hiddenColumns.push(key);
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_TABLE: TableElement
  }
}
