import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import { fieldArgs, FieldControls, FieldTemplate } from './field.model';

export default {
  title: 'Components/Field (deprecated)',
  argTypes: FieldControls
} as Meta;

export const Default = FieldTemplate.bind({});
Default.args = fieldArgs;

export const Label = FieldTemplate.bind({});
Label.args = {
  ...fieldArgs,
  slot: html`
    <aotw-label>Label</aotw-label>
    <input />
  `
};

export const Message = FieldTemplate.bind({});
Message.args = {
  ...fieldArgs,
  slot: html`
    <input />
    <aotw-message>Message</aotw-message>
  `
};

export const InputMessage = FieldTemplate.bind({});
InputMessage.args = {
  ...fieldArgs,
  slot: html`
    <aotw-label>Label</aotw-label>
    <input message="Input message" />
  `
};

export const InputError = FieldTemplate.bind({});
InputError.args = {
  ...fieldArgs,
  slot: html`
    <aotw-label>Label</aotw-label>
    <input error="Input error" />
  `
};

export const Disabled = FieldTemplate.bind({});
Disabled.args = {
  ...fieldArgs,
  disabled: true,
  slot: html`
    <aotw-label disabled>Label</aotw-label>
    <input disabled />
    <aotw-message disabled>Message</aotw-message>
  `
};
