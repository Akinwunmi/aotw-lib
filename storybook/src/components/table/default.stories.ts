import { Meta } from '@storybook/web-components';

import { tableArgs, TableTemplate } from './table.model';

export default {
  title: 'Components/Table'
} as Meta;

export const Default = TableTemplate.bind({});
Default.args = tableArgs;
