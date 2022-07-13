import '@aotw/components/src/chip';
import { Icon } from '@aotw/components/src/icon';
import { html, TemplateResult } from 'lit';

import { Story } from '../../../types/story.model';

interface ChipArgTypes {
  active: boolean;
  disabled: boolean;
  icon?: Icon;
  prefix?: TemplateResult;
  suffix?: TemplateResult;
  text: string;
}

export const chipArgs: ChipArgTypes = {
  active: false,
  disabled: false,
  text: 'Chip'
};

export const ChipTemplate: Story<ChipArgTypes> = (
  { active, disabled, icon, prefix, suffix, text }: ChipArgTypes
) => {
  function chipToRemove(e) {
    document.querySelector('#root-inner')?.removeChild(e.detail);
  }

  return html`
    <aotw-chip
      @chipToRemove=${chipToRemove}
      .icon=${icon}
      ?active=${active}
      ?disabled=${disabled}
    >${prefix}${text}${suffix}</aotw-chip>
  `;
};