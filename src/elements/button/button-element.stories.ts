import { html } from 'lit';

import '../../../dist';

import { Story } from '../../stories';

import { ButtonVariant } from './button';

export default {
  title: 'Component/Button',
  component: 'button-element'
};

interface ArgTypes {
  isDisabled: boolean;
  variant: ButtonVariant;
}

const Template: Story<ArgTypes> = ({ isDisabled, variant }: ArgTypes) => {
  return html`
    <aotw-button .isDisabled=${isDisabled} .variant=${variant}>
      Button
    </aotw-button>
  `;
};

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  variant: ButtonVariant.PRIMARY
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  variant: ButtonVariant.SECONDARY
};

export const ButtonWithIcon = () => {
  return html`
    <aotw-button>
      <aotw-icon name="logo"></aotw-icon>
      Button
    </aotw-button>
  `;
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  isDisabled: true
};