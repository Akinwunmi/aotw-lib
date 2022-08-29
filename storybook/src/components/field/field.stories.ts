import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import { fieldArgs, FieldControls, FieldTemplate } from './field.model';

export default {
  title: 'Components/Field',
  argTypes: FieldControls
} as Meta;

export const Default = FieldTemplate.bind({});
Default.args = fieldArgs;

export const Label = FieldTemplate.bind({});
Label.args = {
  ...fieldArgs,
  slot: html`
    <aotw-label>Label</aotw-label>
    <input aotwInput />
  `
}

export const Message = FieldTemplate.bind({});
Message.args = {
  ...fieldArgs,
  slot: html`
    <input aotwInput />
    <aotw-message>Message</aotw-message>
  `
}

export const Placeholder = FieldTemplate.bind({});
Placeholder.args = {
  ...fieldArgs,
  slot: html`
    <input aotwInput placeholder="Placeholder" />
  `
}

export const Value = FieldTemplate.bind({});
Value.args = {
  ...fieldArgs,
  slot: html`
    <input aotwInput value="Value" />
  `
}

export const InputMessage = FieldTemplate.bind({});
InputMessage.args = {
  ...fieldArgs,
  slot: html`
    <aotw-label>Label</aotw-label>
    <input aotwInput message="Input message" />
  `
}

export const InputError = FieldTemplate.bind({});
InputError.args = {
  ...fieldArgs,
  slot: html`
    <aotw-label>Label</aotw-label>
    <input aotwInput error="Input error" />
  `
}

export const Disabled = FieldTemplate.bind({});
Disabled.args = {
  ...fieldArgs,
  disabled: true,
  slot: html`
    <aotw-label>Label</aotw-label>
    <input aotwInput />
    <aotw-message>Message</aotw-message>
  `
}
