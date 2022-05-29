import { ButtonVariant } from '@aotw/components/src/button';
import { Icon } from '@aotw/components/src/icon';
import { Meta } from '@storybook/web-components';

import { buttonArgs, ButtonControls, ButtonTemplate } from './button.model';

export default {
  title: 'Components/Button/Secondary',
  argTypes: ButtonControls
} as Meta;

export const WithText = ButtonTemplate.bind({});
WithText.args = {
  ...buttonArgs,
  variant: ButtonVariant.Secondary
};

export const WithIcon = ButtonTemplate.bind({});
WithIcon.args = {
  ...buttonArgs,
  icon: Icon.LOGO,
  text: '',
  variant: ButtonVariant.Secondary
}

export const WithIconAndText = ButtonTemplate.bind({});
WithIconAndText.args = {
  ...buttonArgs,
  icon: Icon.LOGO,
  variant: ButtonVariant.Secondary
}

export const Active = ButtonTemplate.bind({});
Active.args = {
  ...buttonArgs,
  active: true,
  variant: ButtonVariant.Secondary
}

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  ...buttonArgs,
  disabled: true,
  variant: ButtonVariant.Secondary
}

export const GhostWithText = ButtonTemplate.bind({});
GhostWithText.args = {
  ...buttonArgs,
  ghost: true,
  variant: ButtonVariant.Secondary
}

export const GhostWithIconAndText = ButtonTemplate.bind({});
GhostWithIconAndText.args = {
  ...buttonArgs,
  ghost: true,
  icon: Icon.LOGO,
  variant: ButtonVariant.Secondary
}

export const GhostWithIcon = ButtonTemplate.bind({});
GhostWithIcon.args = {
  ...buttonArgs,
  ghost: true,
  icon: Icon.LOGO,
  text: '',
  variant: ButtonVariant.Secondary
}

export const GhostActive = ButtonTemplate.bind({});
GhostActive.args = {
  ...buttonArgs,
  active: true,
  ghost: true,
  variant: ButtonVariant.Secondary
}

export const GhostDisabled = ButtonTemplate.bind({});
GhostDisabled.args = {
  ...buttonArgs,
  disabled: true,
  ghost: true,
  variant: ButtonVariant.Secondary
}

export const OutlineWithText = ButtonTemplate.bind({});
OutlineWithText.args = {
  ...buttonArgs,
  outline: true,
  variant: ButtonVariant.Secondary
}

export const OutlineWithIconAndText = ButtonTemplate.bind({});
OutlineWithIconAndText.args = {
  ...buttonArgs,
  icon: Icon.LOGO,
  outline: true,
  variant: ButtonVariant.Secondary
}

export const OutlineWithIcon = ButtonTemplate.bind({});
OutlineWithIcon.args = {
  ...buttonArgs,
  icon: Icon.LOGO,
  outline: true,
  text: '',
  variant: ButtonVariant.Secondary
}

export const OutlineActive = ButtonTemplate.bind({});
OutlineActive.args = {
  ...buttonArgs,
  active: true,
  outline: true,
  variant: ButtonVariant.Secondary
}

export const OutlineDisabled = ButtonTemplate.bind({});
OutlineDisabled.args = {
  ...buttonArgs,
  disabled: true,
  outline: true,
  variant: ButtonVariant.Secondary
}
