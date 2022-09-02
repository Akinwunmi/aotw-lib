import { Overlay, OverlayConfig } from '@aotw/components/src/overlay';
import { Meta } from '@storybook/web-components';

import { overlayArgs, OverlayTemplate } from './overlay.model';

export default {
  title: 'Components/Overlay'
} as Meta;

export const Default = OverlayTemplate.bind({});
Default.args = {
  ...overlayArgs,
  config: { position: Overlay.position() } as OverlayConfig
};

// TODO: Click outside functionality
// export const ClickOutside = OverlayTemplate.bind({});
// ClickOutside.args = {
//   ...overlayArgs,
//   config: { clickOutside: true, location: customLocation } as OverlayConfig
// };

// TODO: Position builder
// export const CustomPosition = OverlayTemplate.bind({});
// CustomPosition.args = {
//   ...overlayArgs,
//   config: { location: customLocation } as OverlayConfig
// };
