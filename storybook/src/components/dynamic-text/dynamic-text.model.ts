import '@aotw/components/src/dynamic-text';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

export const DynamicTextControls = {
  className: {
    control: 'select',
    defaultValue: 'small',
    options: ['small', 'medium', 'large']
  }
};

interface DynamicTextArgTypes {
  alignment: 'left' | 'right';
  className: string;
  text: string;
}

export const dynamicTextArgs: DynamicTextArgTypes = {
  alignment: 'left',
  className: 'small',
  text: 'Dynamic Text'
};

export const DynamicTextTemplate: Story<DynamicTextArgTypes> = (
  { alignment, className, text }: DynamicTextArgTypes
) => {
  return html`
    <div class="dynamic-text-wrapper ${className}">
      <aotw-dynamic-text .alignment=${alignment}>${text}</aotw-dynamic-text>
    </div>
  `;
};
