import { Meta } from '@storybook/web-components';

import { inputArgs, InputControls, InputTemplate } from './input.model';

export default {
  title: 'Components/Input',
  argTypes: InputControls
} as Meta;

export const Default = InputTemplate.bind({});
Default.args = inputArgs;

export const WithLabel = InputTemplate.bind({});
WithLabel.args = {
  ...inputArgs,
  label: 'Label'
};