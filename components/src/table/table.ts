import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import tableStyles from './table.scss';
import { Column, Data } from './table.model';
import { Icon } from '../icon';

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

  setData(columnKey: string): TemplateResult[] | undefined {
    return this.data?.map(cell => {
      let value = cell[columnKey] ?? '';
      const icons = Object.values(Icon);
      if (icons.find(icon => icon.toString() === value)) {
        value = html`<aotw-icon name=${value}></aotw-icon>`;
      }

      return html`
        <div class="cell">${value}</div>
      `;
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