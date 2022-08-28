import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import { tabArgs, TabGroupTemplate, tabStub } from './tab.model';

export default {
  title: 'Components/Tab'
} as Meta;

const tabWithDisabledStub = [
  { id: 1, title: 'Tab 1', disabled: false },
  { id: 2, title: 'Tab 2', disabled: true },
  { id: 3, title: 'Tab 3', disabled: false }
];

export const Default = TabGroupTemplate.bind({});
Default.args = tabArgs;

export const Disabled = TabGroupTemplate.bind({});
Disabled.args = {
  ...tabArgs,
  slot: html`
    ${tabWithDisabledStub.map(({ id, title, disabled }) => html`
      <aotw-tab id=${id} ?disabled=${disabled}>${title}</aotw-tab>
    `)}
  `
};
