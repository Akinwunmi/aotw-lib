import { Meta } from '@storybook/web-components';

import { buttonArgs, ButtonControls, ButtonTemplate } from './button.model';

export default {
  title: 'Core/Button',
  argTypes: ButtonControls
} as Meta;

export const Default = ButtonTemplate.bind({});
Default.args = buttonArgs;

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  ...buttonArgs,
  secondary: true
};

export const IconOnly = ButtonTemplate.bind({});
IconOnly.args = {
  ...buttonArgs,
  icon: 'logo',
  text: undefined
};

export const Prefix = ButtonTemplate.bind({});
Prefix.args = {
  ...buttonArgs,
  icon: 'logo'
};

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  ...buttonArgs,
  disabled: true
};
