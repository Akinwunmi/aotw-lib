import { Meta } from '@storybook/web-components';

import { iconArgs, IconControls, IconTemplate } from './icon';

export default {
  title: 'Components/Icon',
  argTypes: IconControls
} as Meta;

export const Default = IconTemplate.bind({});
Default.args = iconArgs;
