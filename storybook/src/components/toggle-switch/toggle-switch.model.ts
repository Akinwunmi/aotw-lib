import '@aotw/components/src/toggle-switch';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

interface ToggleSwitchArgTypes {
  active: boolean;
  disabled: boolean;
  label?: string;
}

export const toggleSwitchArgs: ToggleSwitchArgTypes = {
  active: false,
  disabled: false
};

export const ToggleSwitchTemplate: Story<ToggleSwitchArgTypes> = (
  { active, disabled, label }: ToggleSwitchArgTypes
) => {
  return html`
    <aotw-toggle-switch
      ?active=${active}
      ?disabled=${disabled}
      .label=${label}
    ></aotw-toggle-switch>
  `;
};