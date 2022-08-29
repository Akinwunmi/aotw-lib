import '@aotw/components/src/error';
import '@aotw/components/src/field';
import '@aotw/components/src/label';
import '@aotw/components/src/message';
import { html, TemplateResult } from 'lit';

import { Story } from '../../../types/story.model';

export const FieldControls = {
  slot: { control: 'text' },
}

interface FieldArgTypes {
  disabled: boolean;
  slot: TemplateResult | string;
}

export const fieldArgs: FieldArgTypes = {
  disabled: false,
  slot: html`
    <input aotwInput />
  `,
};

export const FieldTemplate: Story<FieldArgTypes> = ({ disabled, slot }: FieldArgTypes) => {
  return html`
    <aotw-field ?disabled=${disabled}>${slot}</aotw-field>
  `;
};