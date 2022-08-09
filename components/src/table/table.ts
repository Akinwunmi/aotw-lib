import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Icon } from '../icon';
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
        ${this.setColumns()}
      </div>
    `;
  }

  private setColumns(): TemplateResult[] | undefined {
    return this.columns?.map(column => {
      const classes = {
        hidden: this._hiddenColumns.includes(column.key)
      };

      return html`
        <div id=${column.key} class="table_column ${classMap(classes)}">
          <div
            class="table_column__header"
            title=${column.name}
            @click=${() => this.hideColumn(column.key)}
          >
            <span>${column.parent}</span>
            ${column.abbreviation ?? column.name}
          </div>
          <div class="table_column__data">            
            ${this.setData(column.key)}
          </div>
        </div>
      `;
    });
  }

  private setData(columnKey: string): TemplateResult[] | undefined {
    return this.data?.map(cell => {
      let value = cell[columnKey] ?? '';
      const icons = Object.values(Icon);
      if (icons.find(icon => String(icon) === value)) {
        value = html`<aotw-icon name=${value as Icon}></aotw-icon>`;
      }

      return html`
        <div class="cell">${value}</div>
      `;
    });
  }

  private hideColumn(key: string) {
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