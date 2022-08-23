import '@aotw/components/src/overlay';
import { ElementPosition, OverlayCreateOptions, OverlayRemoveOptions } from '@aotw/components/src/overlay';
import { html } from 'lit';

import { Story } from '../../../types/story.model';
import { handleElement, handleExistence } from './overlay.utils';

interface OverlayArgTypes {
  handleClick: (e: Event, element?: HTMLElement, position?: ElementPosition) => void
  options?: OverlayCreateOptions | OverlayRemoveOptions;
}

export const overlayArgs: OverlayArgTypes = {
  handleClick: handleElement
};

export const OverlayTemplate: Story<OverlayArgTypes> = ({ handleClick, options }: OverlayArgTypes) => {
  return html`
    <aotw-chip class="create" @click=${handleExistence.bind(this, 'create', options)}>Create</aotw-chip>
    <aotw-chip class="open" disabled @click=${handleClick}>Open</aotw-chip>
    <aotw-chip class="remove" disabled @click=${handleExistence.bind(this, 'remove', options)}>Remove</aotw-chip>
  `;
};