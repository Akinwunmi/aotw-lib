import { Meta } from '@storybook/web-components';

import { overlayArgs, OverlayTemplate } from './overlay';

export default {
  title: 'Components/Overlay'
} as Meta;

export const Default = OverlayTemplate.bind({});
Default.args = overlayArgs;
