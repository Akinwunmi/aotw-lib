import { Icon } from '@aotw/components/src/icon';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import { chipArgs, ChipTemplate } from './chip.model';

export default {
  title: 'Components/Chip'
} as Meta;

export const Default = ChipTemplate.bind({});
Default.args = chipArgs;

export const WithText = Default;

export const WithIconAndText = ChipTemplate.bind({});
WithIconAndText.args = {
  ...chipArgs,
  slot: html`
    <aotw-icon name="check" slot="prefix"></aotw-icon>
    Chip
  `
}

export const WithIcon = ChipTemplate.bind({});
WithIcon.args = {
  ...chipArgs,
  slot: html`<aotw-icon name="logo" slot="prefix"></aotw-icon>`
}

export const Removable = ChipTemplate.bind({});
Removable.args = {
  ...chipArgs,
  slot: html`
    Chip
    <aotw-icon name="close" slot="suffix"></aotw-icon>
  `
}

export const Active = ChipTemplate.bind({});
Active.args = {
  ...chipArgs,
  active: true
}

export const Disabled = ChipTemplate.bind({});
Disabled.args = {
  ...chipArgs,
  disabled: true
}