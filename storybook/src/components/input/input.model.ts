import '@aotw/components/src/input';
import { } from '@aotw/components/src/input';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

export const InputControls = {
  variant: { }
}

interface InputArgTypes {
  label?: string;
}

export const inputArgs: InputArgTypes = { };

export const InputTemplate: Story<InputArgTypes> = (
  { label }: InputArgTypes
) => {
  return html`
    <aotw-input .label=${label}></aotw-input>
  `;
};