import { AotwIconRegistry } from '@aotw/components/src/icon/icon-registry';
import { Meta } from '@storybook/web-components';

import { iconsStub } from './icon.mock';
import { iconArgs, IconControls, IconTemplate } from './icon.model';

export default {
  title: 'Components/Icon',
  argTypes: IconControls
} as Meta;

AotwIconRegistry.register(iconsStub);

export const Default = IconTemplate.bind({});
Default.args = iconArgs;
