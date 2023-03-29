import { Meta } from '@storybook/web-components';

import { dividerArgs, DividerTemplate } from './divider';

export default {
  title: 'Core/Divider'
} as Meta;

export const Default = DividerTemplate.bind({});
Default.args = dividerArgs;

export const Vertical = DividerTemplate.bind({});
Vertical.args = {
  ...dividerArgs,
  vertical: true
};
