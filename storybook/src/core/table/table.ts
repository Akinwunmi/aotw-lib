import { TemplateResult, html } from 'lit';

import { Story } from '../../../types/story.model';

interface TableProps {
  checkboxes: number[];
  columns: number;
  disabledRows: number[];
  radioButtons: number[];
  rows: number;
}

export const tableArgs: TableProps = {
  checkboxes: [3, 4, 6],
  columns: 5,
  disabledRows: [6, 7, 9],
  radioButtons: [2, 5, 9],
  rows: 11
};

export const TableTemplate: Story<TableProps> = (props) => {
  const header = Array(props.columns).fill(true).map((_, index) => html`
    <th>
      Column ${index + 1}
      <aotw-icon name="sort" style="color: var(--aotw-color-grey-400)"></aotw-icon>
    </th>
  `);

  const cells = (rowIndex: number): TemplateResult[] => 
    Array(props.columns).fill(true).map((_, index) => html`
      <td>
        Cell ${rowIndex}.${index + 1}
      </td>
    `);

  const checkbox = (rowIndex: number) => props.checkboxes.includes(rowIndex) && html`
    <input
      aotw-checkbox
      type="checkbox"
      id="row-${rowIndex}"
      name="checkbox-group"
      ?disabled=${props.disabledRows.includes(rowIndex)}
    />
    <label for="row-${rowIndex}">Row ${rowIndex + 1}</label>
  `;

  const radioButton = (rowIndex: number) => props.radioButtons.includes(rowIndex) && html`
    <input
      aotw-radio-button
      type="radio"
      id="row-${rowIndex}"
      name="radio-group"
      ?disabled=${props.disabledRows.includes(rowIndex)}
    />
    <label for="row-${rowIndex}">Row ${rowIndex + 1}</label>
  `;

  const rows = Array(props.rows).fill(true).map((_, index) => {
    return html`
      <tr ?disabled=${props.disabledRows.includes(index)}>
        <th>
          ${checkbox(index) || ''}
          ${radioButton(index) || ''}
          ${!checkbox(index) && !radioButton(index) ? `Row ${index + 1}` : ''}
        </th>
        ${cells(index + 1).slice(1, -1)}
        <td>
          <button ghost ?disabled=${props.disabledRows.includes(index)}>
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
