import '@aotw/components/src/button';
import { ButtonVariant } from '@aotw/components/src/button';
import { Icon } from '@aotw/components/src/icon';
import { html, TemplateResult } from 'lit';

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
  outline: boolean;
  prefix?: TemplateResult;
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

export const iconHTML = html`<aotw-icon name=${Icon.LOGO} slot="prefix"></aotw-icon>`;

export const ButtonTemplate: Story<ButtonArgTypes> = (
  { active, disabled, ghost, outline, prefix, text, variant }: ButtonArgTypes
) => {
  return html`
    <aotw-button
      .variant=${variant}
      ?active=${active}
      ?disabled=${disabled}
      ?ghost=${ghost}
      ?outline=${outline}
    >${prefix}${text}</aotw-button>
  `;
};