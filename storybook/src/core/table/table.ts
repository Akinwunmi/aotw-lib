import { html } from 'lit';

import { Story } from '../../../types/story.model';

interface TableProps {
  columns: number;
  rows: number;
}

export const tableArgs: TableProps = {
  columns: 5,
  rows: 6
};

export const TableTemplate: Story<TableProps> = (props) => {
  const header = Array(props.columns).fill(true).map((_, index) => html`
    <th>
      Column ${index + 1}
      <aotw-icon name="sort" style="color: var(--aotw-color-grey-400)"></aotw-icon>
    </th>
  `);

  const cells = (rowIndex) => Array(props.columns).fill(true).map((_, index) => html`
    <td>
      Cell ${rowIndex}.${index + 1}
    </td>
  `);

  const rows = Array(props.rows).fill(true).map((_, index) => {
    return html`
      <tr>
        <th>Row ${index + 1}</th>
        ${cells(index + 1).slice(1, -1)}
        <td>
          <button ghost>
            <aotw-icon name="ellipsis" size="medium"></aotw-icon>
          </button>
        </td>
      </tr>
    `;
  });

  return html`
    <table aotw-table>
      <caption>Caption</caption>
      <thead>
        <tr>${header}</tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
};
