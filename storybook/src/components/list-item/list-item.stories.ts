import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import { listItemArgs, ListItemTemplate } from './list-item.model';

export default {
  title: 'Components/List Item'
} as Meta;

export const Default = ListItemTemplate.bind({});
Default.args = listItemArgs;

export const WithPrefix = ListItemTemplate.bind({});
WithPrefix.args = {
  ...listItemArgs,
  prefixContent: 'logo',
  prefixType: 'icon'
};

export const WithSuffix = ListItemTemplate.bind({});
WithSuffix.args = {
  ...listItemArgs,
  suffixContent: 'New',
  suffixType: 'tag'
};

export const WithPrefixAndSuffix = ListItemTemplate.bind({});
WithPrefixAndSuffix.args = {
  ...listItemArgs,
  prefixContent: html`<aotw-icon name="shine"></aotw-icon>`,
  prefixType: 'tag',
  suffixContent: 'logo',
  suffixType: 'icon'
};

export const Disabled = ListItemTemplate.bind({});
Disabled.args = {
  ...listItemArgs,
  disabled: true
};
