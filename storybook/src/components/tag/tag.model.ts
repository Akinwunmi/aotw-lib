import '@aotw/components/src/tag';
import { Icon } from '@aotw/components/src/icon';
import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Story } from '../../../types/story.model';

export const TagControls = {
  icon: {
    control: 'select',
    defaultValue: undefined,
    options: [undefined, ...Object.values(Icon)]
  }
}

interface TagArgTypes {
  customClass?: string;
  slot: TemplateResult | string;
  tagToDelete: (e: Event) => void;
}

export const tagArgs: TagArgTypes = {
  slot: 'Tag',
  tagToDelete: (e: Event) => 
    document.getElementById('root-inner')?.removeChild((e as CustomEvent).detail)
};

export const TagTemplate: Story<TagArgTypes> = (
  { customClass, slot, tagToDelete }: TagArgTypes
) => {
  return html`
    <aotw-tag
      class=${ifDefined(customClass)}
      @delete=${tagToDelete}
    >${slot}</aotw-tag>
  `;
};