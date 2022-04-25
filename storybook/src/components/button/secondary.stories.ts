import { ButtonVariant } from '@aotw/components/src/button';
import { Icon } from '@aotw/components/src/icon';
import { Meta } from '@storybook/web-components';

import { buttonArgs, ButtonTemplate } from './button.model';

export default {
  title: 'Components/Button/Secondary'
} as Meta;

export const WithText = ButtonTemplate.bind({});
WithText.args = {
  ...buttonArgs,
  variant: ButtonVariant.SECONDARY
};

export const WithIcon = ButtonTemplate.bind({});
WithIcon.args = {
  ...buttonArgs,
  icon: Icon.LOGO,
  text: '',
  variant: ButtonVariant.SECONDARY
}

export const WithIconAndText = ButtonTemplate.bind({});
WithIconAndText.args = {
  ...buttonArgs,
  icon: Icon.LOGO,
  variant: ButtonVariant.SECONDARY
}

export const Active = ButtonTemplate.bind({});
Active.args = {
  ...buttonArgs,
  active: true,
  variant: ButtonVariant.SECONDARY
}

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  ...buttonArgs,
  disabled: true,
  variant: ButtonVariant.SECONDARY
}

export const GhostWithText = ButtonTemplate.bind({});
GhostWithText.args = {
  ...buttonArgs,
  ghost: true,
  variant: ButtonVariant.SECONDARY
}

export const GhostWithIconAndText = ButtonTemplate.bind({});
GhostWithIconAndText.args = {
  ...buttonArgs,
  ghost: true,
  icon: Icon.LOGO,
  variant: ButtonVariant.SECONDARY
}

export const GhostWithIcon = ButtonTemplate.bind({});
GhostWithIcon.args = {
  ...buttonArgs,
  ghost: true,
  icon: Icon.LOGO,
  text: '',
  variant: ButtonVariant.SECONDARY
}

export const GhostActive = ButtonTemplate.bind({});
GhostActive.args = {
  ...buttonArgs,
  active: true,
  ghost: true,
  variant: ButtonVariant.SECONDARY
}

export const GhostDisabled = ButtonTemplate.bind({});
GhostDisabled.args = {
  ...buttonArgs,
  disabled: true,
  ghost: true,
  variant: ButtonVariant.SECONDARY
}

export const OutlineWithText = ButtonTemplate.bind({});
OutlineWithText.args = {
  ...buttonArgs,
  outline: true,
  variant: ButtonVariant.SECONDARY
}

export const OutlineWithIconAndText = ButtonTemplate.bind({});
OutlineWithIconAndText.args = {
  ...buttonArgs,
  icon: Icon.LOGO,
  outline: true,
  variant: ButtonVariant.SECONDARY
}

export const OutlineWithIcon = ButtonTemplate.bind({});
OutlineWithIcon.args = {
  ...buttonArgs,
  icon: Icon.LOGO,
  outline: true,
  text: '',
  variant: ButtonVariant.SECONDARY
}

export const OutlineActive = ButtonTemplate.bind({});
OutlineActive.args = {
  ...buttonArgs,
  active: true,
  outline: true,
  variant: ButtonVariant.SECONDARY
}

export const OutlineDisabled = ButtonTemplate.bind({});
OutlineDisabled.args = {
  ...buttonArgs,
  disabled: true,
  outline: true,
  variant: ButtonVariant.SECONDARY
}
