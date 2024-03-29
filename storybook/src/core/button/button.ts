import { html } from 'lit';

import { Story } from '../../../types/story.model';

export const ButtonControls = {};

interface ButtonProps {
  disabled: boolean;
  ghost: boolean;
  icon?: string;
  text?: string;
  secondary: boolean;
}

export const buttonArgs: ButtonProps = {
  disabled: false,
  ghost: false,
  secondary: false,
  text: 'Button'
};

export const iconHTML = html` <aotw-icon name="logo" slot="prefix"></aotw-icon> `;

export const ButtonTemplate: Story<ButtonProps> = (props) => {
  const icon = props.icon && html` <aotw-icon name=${props.icon}></aotw-icon> `;

  return html`
    <button
      ?secondary=${props.secondary}
      ?disabled=${props.disabled}
      ?ghost=${props.ghost}
    >
      ${icon || ''}
      ${props.text || ''}
    </button>
  `;
};
