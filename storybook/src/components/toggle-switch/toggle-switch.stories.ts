import { Meta } from '@storybook/web-components';

import { toggleSwitchArgs, ToggleSwitchTemplate } from './toggle-switch';

export default {
  title: 'Components/Toggle Switch'
} as Meta;

export const Off = ToggleSwitchTemplate.bind({});
Off.args = toggleSwitchArgs;

export const On = ToggleSwitchTemplate.bind({});
On.args = {
  ...toggleSwitchArgs,
  checked: true
}

export const Disabled = ToggleSwitchTemplate.bind({});
Disabled.args = {
  ...toggleSwitchArgs,
  disabled: true
}
