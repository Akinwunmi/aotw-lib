import { Meta } from '@storybook/web-components';

import { tabArgs, TabGroupTemplate } from './tab.model';

export default {
  title: 'Components/Tab'
} as Meta;

export const Default = TabGroupTemplate.bind({});
Default.args = tabArgs;

export const Disabled = TabGroupTemplate.bind({});
Disabled.args = {
  ...tabArgs,
  disabledItem: 1
};
