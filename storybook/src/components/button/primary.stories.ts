import { Icon } from '@aotw/components/src/icon';
import { Meta } from '@storybook/web-components';

import { buttonArgs, ButtonTemplate } from './button.model';

export default {
  title: 'Components/Button/Primary'
} as Meta;

export const WithText = ButtonTemplate.bind({});
WithText.args = buttonArgs;

export const WithIcon = ButtonTemplate.bind({});
WithIcon.args = {
  ...buttonArgs,
  icon: Icon.LOGO,
  text: ''
}

export const WithIconAndText = ButtonTemplate.bind({});
WithIconAndText.args = {
  ...buttonArgs,
  icon: Icon.LOGO
}

export const Active = ButtonTemplate.bind({});
Active.args = {
  ...buttonArgs,
  active: true
}

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  ...buttonArgs,
  disabled: true
}

export const GhostWithText = ButtonTemplate.bind({});
GhostWithText.args = {
  ...buttonArgs,
  ghost: true
}

export const GhostWithIconAndText = ButtonTemplate.bind({});
GhostWithIconAndText.args = {
  ...buttonArgs,
  ghost: true,
  icon: Icon.LOGO
}

export const GhostWithIcon = ButtonTemplate.bind({});
GhostWithIcon.args = {
  ...buttonArgs,
  ghost: true,
  icon: Icon.LOGO,
  text: ''
}

export const GhostActive = ButtonTemplate.bind({});
GhostActive.args = {
  ...buttonArgs,
  active: true,
  ghost: true
}

export const GhostDisabled = ButtonTemplate.bind({});
GhostDisabled.args = {
  ...buttonArgs,
  disabled: true,
  ghost: true
}

export const OutlineWithText = ButtonTemplate.bind({});
OutlineWithText.args = {
  ...buttonArgs,
  outline: true
}

export const OutlineWithIconAndText = ButtonTemplate.bind({});
OutlineWithIconAndText.args = {
  ...buttonArgs,
  icon: Icon.LOGO,
  outline: true
}

export const OutlineWithIcon = ButtonTemplate.bind({});
OutlineWithIcon.args = {
  ...buttonArgs,
  icon: Icon.LOGO,
  outline: true,
  text: ''
}

export const OutlineActive = ButtonTemplate.bind({});
OutlineActive.args = {
  ...buttonArgs,
  active: true,
  outline: true
}

export const OutlineDisabled = ButtonTemplate.bind({});
OutlineDisabled.args = {
  ...buttonArgs,
  disabled: true,
  outline: true
}
