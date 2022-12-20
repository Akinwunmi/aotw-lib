import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import { chipGroupArgs, ChipGroupTemplate } from './chip-group.model';

export default {
  title: 'Components/Chip Group'
} as Meta;

export const Default = ChipGroupTemplate.bind({});
Default.args = chipGroupArgs;

export const ActiveChip = ChipGroupTemplate.bind({});
ActiveChip.args = {
  ...chipGroupArgs,
  slot: html`
    <aotw-chip size="medium">
      <aotw-icon name="list" size="extra-large"></aotw-icon>
    </aotw-chip>
    <aotw-chip size="medium" active>
      <aotw-icon name="grid" size="extra-large"></aotw-icon>
    </aotw-chip>
  `
};
