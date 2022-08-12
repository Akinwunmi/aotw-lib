import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import { fieldArgs, FieldControls, FieldTemplate } from './field.model';

export default {
  title: 'Components/Field',
  argTypes: FieldControls
} as Meta;

export const Default = FieldTemplate.bind({});
Default.args = fieldArgs;

export const InputWithIcons = FieldTemplate.bind({});
InputWithIcons.args = {
  ...fieldArgs,
  slot: html`
    <aotw-label>Label</aotw-label>
    <aotw-input>
      <aotw-icon name="logo" prefix></aotw-icon>
      <aotw-icon name="check" suffix></aotw-icon>
    </aotw-input>
    <aotw-message>Message</aotw-message>
`,
}

export const WithHtmlInput = FieldTemplate.bind({});
WithHtmlInput.args = {
  ...fieldArgs,
  slot: html`
    <aotw-label>Label</aotw-label>
    <input aotwInput value="Input" />
    <aotw-message>Message</aotw-message>
`,
}

export const Disabled = FieldTemplate.bind({});
Disabled.args = {
  ...fieldArgs,
  disabled: true,
  slot: html`
    <aotw-label>Label</aotw-label>
    <aotw-input disabled>
      <aotw-icon name="logo" prefix></aotw-icon>
      <aotw-icon name="check" suffix></aotw-icon>
    </aotw-input>
    <aotw-message>Message</aotw-message>
`,
}
