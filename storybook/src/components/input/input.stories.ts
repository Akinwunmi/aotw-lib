import { InputMessageState } from '@aotw/components/src/input';
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

export const WithMessage = InputTemplate.bind({});
WithMessage.args = {
  ...inputArgs,
  message: {
    text: 'Default message',
    state: InputMessageState.Default
  }
};

export const WithErrorMessage = InputTemplate.bind({});
WithErrorMessage.args = {
  ...inputArgs,
  message: {
    text: 'Error message',
    state: InputMessageState.Error
  }
};

export const WithWarningMessage = InputTemplate.bind({});
WithWarningMessage.args = {
  ...inputArgs,
  message: {
    text: 'Warning message',
    state: InputMessageState.Warning
  }
};

export const WithLabelAndMessage = InputTemplate.bind({});
WithLabelAndMessage.args = {
  ...inputArgs,
  label: 'Label',
  message: {
    text: 'Default message',
    state: InputMessageState.Default
  }
};
