import '@aotw/components/src/toggle-switch';
import { html, TemplateResult } from 'lit';

import { Story } from '../../../types/story.model';

interface ToggleSwitchArgTypes {
  active: boolean;
  disabled: boolean;
  slot?: TemplateResult | string;
}

export const toggleSwitchArgs: ToggleSwitchArgTypes = {
  active: false,
  disabled: false
};

export const ToggleSwitchTemplate: Story<ToggleSwitchArgTypes> = ({ active, disabled, slot }) => {
  return html`
    <aotw-toggle-switch
      ?active=${active}
      ?disabled=${disabled}
    >${slot}</aotw-toggle-switch>
  `;
};