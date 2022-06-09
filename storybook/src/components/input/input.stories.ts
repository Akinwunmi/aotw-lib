import { Meta } from '@storybook/web-components';

import { inputArgs, InputControls, InputTemplate } from './input.model';

export default {
  title: 'Components/Input',
  argTypes: InputControls
} as Meta;

export const Default = InputTemplate.bind({});
Default.args = inputArgs;

export const WithPlaceholder = InputTemplate.bind({});
WithPlaceholder.args = {
  ...inputArgs,
  placeholder: 'Placeholder'
};

export const WithValue = InputTemplate.bind({});
WithValue.args = {
  ...inputArgs,
  value: 'Value'
};

export const WithLabel = InputTemplate.bind({});
WithLabel.args = {
  ...inputArgs,
  label: 'Label'
};

export const WithValueAndLabel = InputTemplate.bind({});
WithValueAndLabel.args = {
  ...inputArgs,
  label: 'Label',
  value: 'Value'
};
