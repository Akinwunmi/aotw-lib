import { html } from 'lit';

import '../../../dist/elements/toggle-button/toggle-button-element.js';
import { Story } from '../../stories';

export default {
  title: 'Component/Toggle Button',
  component: 'toggle-button-element'
};

interface ArgTypes {
  isActive: boolean;
  isDisabled: boolean;
}

const Template: Story<ArgTypes> = ({ isActive, isDisabled }: ArgTypes) => {
  return html`
    <aotw-toggle-button .isActive=${isActive} .isDisabled=${isDisabled}>
      Toggle Button
    </aotw-toggle-button>
  `;
};

export const ToggleButtonDefault = Template.bind({});
ToggleButtonDefault.args = {
  isActive: false,
  isDisabled: false
};

export const ToggleButtonInactive = Template.bind({});
ToggleButtonInactive.args = {
  isActive: false,
  isDisabled: false
};

export const ToggleButtonActive = Template.bind({});
ToggleButtonActive.args = {
  isActive: true,
  isDisabled: false
};

export const ToggleButtonDisabled = Template.bind({});
ToggleButtonDisabled.args = {
  isActive: false,
  isDisabled: true
};
