import '@aotw/components/src/button';
import { ButtonVariant } from '@aotw/components/src/button';
import { Icon } from '@aotw/components/src/icon';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

export const ButtonControls = {
  variant: {
    control: 'inline-radio',
    defaultValue: ButtonVariant.Primary,
    options: Object.values(ButtonVariant)
  }
}

interface ButtonArgTypes {
  active: boolean;
  disabled: boolean;
  ghost: boolean;
  icon?: Icon;
  outline: boolean;
  text: string;
  variant: ButtonVariant;
}

export const buttonArgs: ButtonArgTypes = {
  active: false,
  disabled: false,
  ghost: false,
  outline: false,
  text: 'Button',
  variant: ButtonVariant.Primary
};

export const ButtonTemplate: Story<ButtonArgTypes> = (
  { active, disabled, ghost, icon, outline, text, variant }: ButtonArgTypes
) => {
  return html`
    <aotw-button
      .icon=${icon}
      .variant=${variant}
      ?active=${active}
      ?disabled=${disabled}
      ?ghost=${ghost}
      ?outline=${outline}
    >${text}</aotw-button>
  `;
};