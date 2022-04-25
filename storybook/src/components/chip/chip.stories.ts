import { Icon } from '@aotw/components/src/icon';
import { Meta } from '@storybook/web-components';

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
  icon: Icon.CHECK
}

export const WithIcon = ChipTemplate.bind({});
WithIcon.args = {
  ...chipArgs,
  icon: Icon.LOGO,
  text: ''
}

export const Deletable = ChipTemplate.bind({});
Deletable.args = {
  ...chipArgs,
  deletable: true
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