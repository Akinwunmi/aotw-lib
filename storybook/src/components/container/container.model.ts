import '@aotw/components/src/container';
import { html, TemplateResult } from 'lit';

import { Story } from '../../../types/story.model';

interface ArgTypes {
  elevated: boolean;
  slot: TemplateResult | string;
}

export const props: ArgTypes = {
  elevated: false,
  slot: 'Content'
};

export const Template: Story<ArgTypes> = (props) => {
  return html`<aotw-container ?elevated=${props.elevated}>${props.slot}</aotw-container>`;
};
