import '@aotw/components/src/table';
import { Column, Data } from '@aotw/components/src/table';
import { html } from 'lit';

import { Story } from '../../../types/story.model';
import { columnsStub, dataStub } from './table.mock';

interface TableArgTypes {
  columns: Column[];
  data: Data[];
}

export const tableArgs: TableArgTypes = {
  columns: columnsStub,
  data: dataStub
};

export const TableTemplate: Story<TableArgTypes> = (
  { columns, data }: TableArgTypes
) => {
  return html`
    <aotw-table
      .columns=${columns}
      .data=${data}
    ></aotw-table>
  `;
};
