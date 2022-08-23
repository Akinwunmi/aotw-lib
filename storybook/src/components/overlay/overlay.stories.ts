import { OverlayCreateOptions } from '@aotw/components/src/overlay';
import { Meta } from '@storybook/web-components';

import { overlayArgs, OverlayTemplate } from './overlay.model';
import { customLocation } from './overlay.utils';

export default {
  title: 'Components/Overlay'
} as Meta;

export const Default = OverlayTemplate.bind({});
Default.args = {
  ...overlayArgs,
  options: { location: customLocation } as OverlayCreateOptions
};
