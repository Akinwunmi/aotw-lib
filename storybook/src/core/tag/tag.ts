import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import { Story } from '../../../types/story.model';

export const TagControls = {
  label: {
    control: 'text'
  },
  prefix: {
    control: 'boolean',
    defaultValue: false
  },
  suffix: {
    control: 'boolean',
    defaultValue: false
  },
  '--aotw-tag-background-color': {
    control: 'color',
    defaultValue: 'var(--aotw-color-grey-100)'
  },
  '--aotw-tag-color': {
    control: 'color',
    defaultValue: 'var(--aotw-color-primary-500)'
  }
};

interface ArgTypes {
  label: string;
  prefix?: boolean;
  suffix?: boolean;
  '--aotw-tag-background-color'?: string;
  '--aotw-tag-color'?: string;
}

export const tagArgs: ArgTypes = {
  label: 'Tag',
  prefix: false,
  suffix: false,
  '--aotw-tag-background-color': 'var(--aotw-color-grey-100)',
  '--aotw-tag-color': 'var(--aotw-color-primary-500)'
};

const styleArgs = [
  '--aotw-tag-background-color',
  '--aotw-tag-color'
];

export const TagTemplate: Story<ArgTypes> = (props) => {
  const styleProps = Object.entries(props).filter(([key, value]) => value && styleArgs.includes(key));
  const customStyle = Object.fromEntries(styleProps);

  const prefix = props.prefix && html`
    <aotw-icon name="shine"></aotw-icon>
  `;
  const suffix = props.suffix && html`
    <aotw-icon name="close"></aotw-icon>
  `;

  return html`
    <div aotw-tag style=${styleMap(customStyle)}>
      ${prefix || ''}
      ${props.label}
      ${suffix || ''}
    </div>
  `;
};
