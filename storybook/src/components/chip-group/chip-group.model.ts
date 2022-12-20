import '@aotw/components/src/chip';
import { html, TemplateResult } from 'lit';

import { Story } from '../../../types/story.model';

interface ChipGroupArgTypes {
  slot: TemplateResult;
}

export const chipGroupArgs: ChipGroupArgTypes = {
  slot: html`
    <aotw-chip>Chip 1</aotw-chip>
    <aotw-chip>Chip 2</aotw-chip>
    <aotw-chip>Chip 3</aotw-chip>
  `
};

export const ChipGroupTemplate: Story<ChipGroupArgTypes> = ({ slot }) => {
  return html`
    <aotw-chip-group>
      ${slot}
    </aotw-chip-group>
  `;
};
