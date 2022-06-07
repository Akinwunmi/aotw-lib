import '@aotw/components/src/input';
import { } from '@aotw/components/src/input';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

export const InputControls = {
  variant: { }
}

interface InputArgTypes { }

export const inputArgs: InputArgTypes = { };

export const InputTemplate: Story<InputArgTypes> = (
  { }: InputArgTypes
) => {
  return html`
    <aotw-input></aotw-input>
  `;
};