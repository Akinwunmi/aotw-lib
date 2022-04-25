import '@aotw/components/src/chip';
import { Icon } from '@aotw/components/src/icon';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

interface ChipArgTypes {
  active: boolean;
  deletable: boolean;
  disabled: boolean;
  icon?: Icon;
  text: string;
}

export const chipArgs: ChipArgTypes = {
  active: false,
  deletable: false,
  disabled: false,
  text: 'Chip'
};

export const ChipTemplate: Story<ChipArgTypes> = (
  { active, deletable, disabled, icon, text }: ChipArgTypes
) => {
  return html`
    <aotw-chip
      .icon=${icon}
      ?active=${active}
      ?deletable=${deletable}
      ?disabled=${disabled}
    >${text}</aotw-chip>
  `;
};