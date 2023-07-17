import { Meta } from '@storybook/web-components';

import { tableArgs, TableTemplate } from './table';

export default {
  title: 'Core/Table'
} as Meta;

export const Default = TableTemplate.bind({});
Default.args = tableArgs;

export const SelectableRows = TableTemplate.bind({});
SelectableRows.args = {
  ...tableArgs,
  multiSelect: true
};
