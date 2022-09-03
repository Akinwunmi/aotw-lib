import '@aotw/components/src/chip';
import { html, TemplateResult } from 'lit';

import { Story } from '../../../types/story.model';

interface ChipArgTypes {
  active: boolean;
  disabled: boolean;
  size: 'small' | 'medium';
  slot: TemplateResult | string;
}

export const chipArgs: ChipArgTypes = {
  active: false,
  disabled: false,
  size: 'small',
  slot: 'Chip'
};

export const ChipTemplate: Story<ChipArgTypes> = ({ active, disabled, size, slot }: ChipArgTypes) => {
  function chipToRemove(e) {
    document.querySelector('#root-inner')?.removeChild(e.detail);
  }

  return html`
    <aotw-chip @chipToRemove=${chipToRemove} ?active=${active} ?disabled=${disabled} .size=${size}>
      ${slot}
    </aotw-chip>
  `;
};