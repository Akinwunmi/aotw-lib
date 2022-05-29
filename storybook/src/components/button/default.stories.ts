import { Meta } from '@storybook/web-components';

import { buttonArgs, ButtonControls, ButtonTemplate } from './button.model';

export default {
  title: 'Components/Button',
  argTypes: ButtonControls
} as Meta;

export const Default = ButtonTemplate.bind({});
Default.args = buttonArgs;
