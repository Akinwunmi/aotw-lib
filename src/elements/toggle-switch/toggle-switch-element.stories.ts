import { html } from 'lit';

import '../../../dist/elements/toggle-switch/toggle-switch-element.js';
import { Story } from '../../stories';

export default {
  title: 'Component/Toggle Switch',
  component: 'toggle-switch-element'
};

interface ArgTypes {
  isActive: boolean;
  isDisabled: boolean;
}

const Template: Story<ArgTypes> = ({ isActive, isDisabled }: ArgTypes) => {
  return html`
    <aotw-toggle-switch .isActive=${isActive} .isDisabled=${isDisabled}></aotw-toggle-switch>
  `;
};

export const ToggleSwitchDefault = Template.bind({});
ToggleSwitchDefault.args = {
  isActive: false,
  isDisabled: false
};

export const ToggleSwitchInactive = Template.bind({});
ToggleSwitchInactive.args = {
  isActive: false,
  isDisabled: false
};

export const ToggleSwitchActive = Template.bind({});
ToggleSwitchActive.args = {
  isActive: true,
  isDisabled: false
};

export const ToggleSwitchDisabled = Template.bind({});
ToggleSwitchDisabled.args = {
  isActive: false,
  isDisabled: true
};
