import '@aotw/components/src/icon';
import { IconSize } from '@aotw/components/src/icon';
import { html } from 'lit';

import { Story } from '../../../types/story.model';
import { iconsStub } from './icon.mock';

export const IconControls = {
  name: {
    control: 'select',
    defaultValue: iconsStub[0].name,
    options: iconsStub.map(({ name }) => name)
  },
  size: {
    control: 'select',
    defaultValue: IconSize.Medium,
    options: Object.values(IconSize)
  }
}

interface IconArgTypes {
  name: string;
  size: IconSize;
}

export const iconArgs: IconArgTypes = {
  name: 'logo',
  size: IconSize.ExtraLarge
};

export const IconTemplate: Story<IconArgTypes> = ({ name, size }: IconArgTypes) => {
  return html`
    <aotw-icon .name=${name} .size=${size}></aotw-icon>
  `;
};