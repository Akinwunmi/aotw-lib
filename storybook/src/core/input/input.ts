import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Story } from '../../../types/story.model';

export const InputControls = {};

interface ArgTypes {
  disabled: boolean;
  placeholder?: string;
  value?: string;
}

export const inputArgs: ArgTypes = {
  disabled: false
};

export const InputTemplate: Story<ArgTypes> = (props) => {
  return html`
    <input ?disabled=${props.disabled} .placeholder=${ifDefined(props.placeholder)} .value=${ifDefined(props.value)} />
  `;
};
