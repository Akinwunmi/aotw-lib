import '@aotw/components/src/icon';
import { IconSize } from '@aotw/components/src/icon/icon.model';
import { AotwIconRegistry } from '@aotw/components/src/icon/icon-registry';
import icons from '@aotw/core/dist/icons/icons.json';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

export const IconControls = {
  name: {
    control: 'select',
    defaultValue: icons[0].name,
    options: icons.map(({ name }) => name)
  },
  size: {
    control: 'select',
    defaultValue: IconSize.Medium,
    options: Object.values(IconSize)
  }
};

interface IconProps {
  name: string;
  size: IconSize;
}

export const iconArgs: IconProps = {
  name: 'logo',
  size: IconSize.ExtraLarge
};

AotwIconRegistry.register(icons);

export const IconTemplate: Story<IconProps> = (props) => {
  return html`
    <aotw-icon .name=${props.name} .size=${props.size}></aotw-icon>
  `;
};
