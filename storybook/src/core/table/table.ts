import { TemplateResult, html } from 'lit';

import { Story } from '../../../types/story.model';

interface TableProps {
  checkboxes: number[];
  columns: number;
  disabledRows: number[];
  radioButtons: number[];
  rows: number;
  multiSelect: boolean;
}

export const tableArgs: TableProps = {
  checkboxes: [3, 4, 6],
  columns: 5,
  disabledRows: [6, 7, 9],
  radioButtons: [2, 5, 9],
  rows: 11,
  multiSelect: false
};

export const TableTemplate: Story<TableProps> = (props) => {
  const toggleCheckboxes = () => {
    const checkboxes = document.querySelectorAll('input[name=checkbox-group]') as NodeListOf<HTMLInputElement>;
    const contentCheckboxes = [...checkboxes].slice(1);

    if (contentCheckboxes.every(checkbox => checkbox.checked || (!checkbox.checked && checkbox.disabled))) {
      checkboxes.forEach(checkbox => checkbox.checked = false);
      return;
    }

    if (contentCheckboxes.every(checkbox => !checkbox.checked || (checkbox.checked && checkbox.disabled))) {
      checkboxes.forEach(checkbox => checkbox.checked = true);
      return;
    }

    if (contentCheckboxes.some(checkbox => checkbox.checked)) {
      checkboxes.forEach(checkbox => checkbox.checked = true);
      return;
    }
  };

  const setHeaderCheckbox = () => {
    const checkboxes = document.querySelectorAll('input[name=checkbox-group]') as NodeListOf<HTMLInputElement>;
    const contentCheckboxes = [...checkboxes].slice(1);
    const headerCheckbox = document.querySelector('#row-header') as HTMLInputElement;

    if (contentCheckboxes.every(checkbox => checkbox.checked || (!checkbox.checked && checkbox.disabled))) {
      headerCheckbox.checked = true;
      headerCheckbox.indeterminate = false;
      return;
    }

    if(contentCheckboxes.every(checkbox => !checkbox.checked || (checkbox.checked && checkbox.disabled))) {
      headerCheckbox.checked = false;
      headerCheckbox.indeterminate = false;
      return;
    }
    
    if (contentCheckboxes.some(checkbox => checkbox.checked)) {
      headerCheckbox.checked = false;
      headerCheckbox.indeterminate = true;
      return;
    }
  };

  const headerLabel = (index: number) => props.multiSelect && index === 0
    ? html`
      <input
        aotw-checkbox
        type="checkbox"
        id="row-header"
        name="checkbox-group"
        @click=${toggleCheckboxes}
      />
      <label for="row-header">Column ${index + 1}</label>
    `
    : `Column ${index + 1}`;

  const header = Array(props.columns).fill(true).map((_, index) => html`
    <th>
      ${headerLabel(index)}
      <aotw-icon name="sort" style="color: var(--aotw-color-grey-400)"></aotw-icon>
    </th>
  `);

  const cells = (rowIndex: number): TemplateResult[] => 
    Array(props.columns).fill(true).map((_, index) => html`
      <td>
        Cell ${rowIndex}.${index + 1}
      </td>
    `);

  const checkbox = (rowIndex: number) => (props.multiSelect || props.checkboxes.includes(rowIndex)) && html`
    <input
      aotw-checkbox
      type="checkbox"
      id="row-${rowIndex}"
      name="checkbox-group"
      @click=${setHeaderCheckbox}
      ?disabled=${props.disabledRows.includes(rowIndex)}
    />
    <label for="row-${rowIndex}">Row ${rowIndex + 1}</label>
  `;

  const radioButton = (rowIndex: number) => !props.multiSelect && props.radioButtons.includes(rowIndex) && html`
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
