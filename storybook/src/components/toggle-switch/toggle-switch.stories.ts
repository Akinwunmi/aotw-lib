import { Meta } from '@storybook/web-components';

import { toggleSwitchArgs, ToggleSwitchTemplate } from './toggle-switch.model';

export default {
  title: 'Components/Toggle Switch'
} as Meta;

export const Default = ToggleSwitchTemplate.bind({});
Default.args = toggleSwitchArgs;

export const Inactive = Default;

export const Active = ToggleSwitchTemplate.bind({});
Active.args = {
  ...toggleSwitchArgs,
  active: true
}

export const Disabled = ToggleSwitchTemplate.bind({});
Disabled.args = {
  ...toggleSwitchArgs,
  disabled: true
}

export const WithLabel = ToggleSwitchTemplate.bind({});
WithLabel.args = {
  ...toggleSwitchArgs,
  label: 'Show all'
}
