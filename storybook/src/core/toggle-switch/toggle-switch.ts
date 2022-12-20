import { html } from 'lit';

import { Story } from '../../../types/story.model';

interface ToggleSwitchProps {
  active: boolean;
  checked: boolean;
  disabled: boolean;
  label: string;
}

export const toggleSwitchArgs: ToggleSwitchProps = {
  active: false,
  checked: false,
  disabled: false,
  label: 'Show all'
};

export const ToggleSwitchTemplate: Story<ToggleSwitchProps> = (props) => {
  return html`
    <input
      type="checkbox"
      id="test"
      toggle-switch
      ?active=${props.active}
      ?checked=${props.checked}
      ?disabled=${props.disabled}
    />
    <label for="test">${props.label}</label>
  `;
};
