import '@aotw/components/src/input';
import { InputMessage, InputMessageState } from '@aotw/components/src/input';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

export const InputControls = {
  label: { control: 'text' },
  placeholder: { control: 'text' },
  value: { control: 'text' }
}

interface InputArgTypes {
  label?: string;
  message?: InputMessage;
  placeholder?: string;
  value?: string;
}

export const inputArgs: InputArgTypes = { };

export const InputTemplate: Story<InputArgTypes> = (
  { label, message, placeholder, value }: InputArgTypes
) => {
  return html`
    <aotw-input .label=${label} .message=${message} .placeholder=${placeholder} .value=${value}></aotw-input>
  `;
};