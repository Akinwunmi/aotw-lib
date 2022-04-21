import { Meta } from '@storybook/web-components';
import { Icon } from '@aotw/components/src/icon';

import { buttonArgs, ButtonTemplate } from './button.model';

export default {
  title: 'Components/Button'
} as Meta;

export const Default = ButtonTemplate.bind({});
Default.args = buttonArgs;
