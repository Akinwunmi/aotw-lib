import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import { listArgs, listItemStub, ListTemplate } from './list.model';

export default {
  title: 'Components/List'
} as Meta;

export const Default = ListTemplate.bind({});
Default.args = listArgs;

export const WithPrefix = ListTemplate.bind({});
WithPrefix.args = {
  ...listArgs,
  slot: html`
    <aotw-list-item>
      <aotw-icon name="logo" size="medium" prefix></aotw-icon>
      List Item 1
    </aotw-list-item>
  `
}

export const WithSuffix = ListTemplate.bind({});
WithSuffix.args = {
  ...listArgs,
  slot: html`
    <aotw-list-item>
      List Item 1
      <aotw-tag suffix>New</aotw-tag>
    </aotw-list-item>
  `
}

export const WithPrefixAndSuffix = ListTemplate.bind({});
WithPrefixAndSuffix.args = {
  ...listArgs,
  slot: html`
    <aotw-list-item>
      <aotw-icon name="logo" size="medium" prefix></aotw-icon>
      List Item 1
      <aotw-tag suffix>New</aotw-tag>
    </aotw-list-item>
  `
}

export const DisabledListItem = ListTemplate.bind({});
DisabledListItem.args = {
  ...listArgs,
  slot: html`
    ${listItemStub.map(item => {
      if (item.id === 2) {
        item.disabled = true;
      }
      return html`
        <aotw-list-item id=${item.id} ?disabled=${item.disabled}>${item.label}</aotw-list-item>
      `
    })}
  `
};
