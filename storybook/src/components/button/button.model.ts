import '@aotw/components/src/button';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

export const ButtonControls = {};

interface ButtonArgTypes {
  active: boolean;
  disabled: boolean;
  ghost: boolean;
  icon?: string;
  text?: string;
  secondary: boolean;
}

export const buttonArgs: ButtonArgTypes = {
  active: false,
  disabled: false,
  ghost: false,
  secondary: false,
  text: 'Button'
};

export const iconHTML = html`<aotw-icon name="logo" slot="prefix"></aotw-icon>`;

export const ButtonTemplate: Story<ButtonArgTypes> = (props) => {
  const icon = props.icon && html` <aotw-icon name=${props.icon}></aotw-icon> `;

  return html`
    <aotw-button
      ?secondary=${props.secondary}
      ?active=${props.active}
      ?disabled=${props.disabled}
      ?ghost=${props.ghost}
    >
      ${icon || ''}
      ${props.text || ''}
    </aotw-button>
  `;
};
