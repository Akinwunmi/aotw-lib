import { Meta } from '@storybook/web-components';

import { inputArgs, InputControls, InputTemplate } from './input.model';

export default {
  title: 'Core/Input',
  argTypes: InputControls
} as Meta;

export const Default = InputTemplate.bind({});
Default.args = inputArgs;

export const WithValue = InputTemplate.bind({});
WithValue.args = {
  ...inputArgs,
  value: 'Value'
};

export const WithPlaceholder = InputTemplate.bind({});
WithPlaceholder.args = {
  ...inputArgs,
  placeholder: 'Placeholder'
};

export const Disabled = InputTemplate.bind({});
Disabled.args = {
  ...inputArgs,
  disabled: true
};
