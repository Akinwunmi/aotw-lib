import '@aotw/components/src/tag';
import { Icon } from '@aotw/components/src/icon';
import { html } from 'lit';
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
  deletable: boolean;
  icon?: Icon;
  text: string;
}

export const tagArgs: TagArgTypes = {
  deletable: false,
  text: 'Tag'
};

export const TagTemplate: Story<TagArgTypes> = (
  { customClass, deletable, icon, text }: TagArgTypes
) => {
  return html`
    <aotw-tag
      class=${ifDefined(customClass)}
      ?deletable=${deletable}
      .icon=${icon}
    >${text}</aotw-tag>
  `;
};