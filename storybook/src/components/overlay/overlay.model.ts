import '@aotw/components/src/overlay';
import { ElementPosition, OverlayConfig } from '@aotw/components/src/overlay';
import { html } from 'lit';

import { Story } from '../../../types/story.model';
import { handleClose, handleCreate, handleOpen, handleRemove } from './overlay.utils';

interface OverlayArgTypes {
  handleClose: () => void;
  handleOpen: (e: Event, element?: HTMLElement, position?: ElementPosition) => void
  config?: OverlayConfig;
}

export const overlayArgs: OverlayArgTypes = {
  handleClose: handleClose,
  handleOpen: handleOpen
};

export const OverlayTemplate: Story<OverlayArgTypes> = ({ handleClose, handleOpen, config }: OverlayArgTypes) => {
  return html`
    <aotw-chip class="create" @click=${handleCreate.bind(this, config)}>Create</aotw-chip>
    <aotw-chip class="open" disabled @click=${handleOpen}>Open</aotw-chip>
    <aotw-chip class="close" disabled @click=${handleClose}>Close</aotw-chip>
    <aotw-chip class="remove" disabled @click=${handleRemove}>Remove</aotw-chip>
  `;
};
