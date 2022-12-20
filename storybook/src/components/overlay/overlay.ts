import '@aotw/components/src/overlay/index';
import { OverlayConfig } from '@aotw/components/src/overlay/overlay.model';
import { html } from 'lit';

import { Story } from '../../../types/story.model';
import { handleOpenDialog, handleOpenDropdown, handleOpenToast } from './overlay.utils';

interface OverlayProps {
  '--aotw-overlay-container-padding'?: string;
  handleOpenDialog: (elementId: string, config?: OverlayConfig) => void;
  handleOpenDropdown: (elementId: string, config?: OverlayConfig) => void;
  handleOpenToast: (elementId: string, config?: OverlayConfig) => void;
}

export const overlayArgs: OverlayProps = {
  '--aotw-overlay-container-padding': 'var(--aotw-space-xl)',
  handleOpenDialog,
  handleOpenDropdown,
  handleOpenToast
};

export const OverlayTemplate: Story<OverlayProps> = (props) => {
  if (props['--aotw-overlay-container-padding']) {
    document.documentElement.style.setProperty('--aotw-overlay-container-padding', props['--aotw-overlay-container-padding']);
  }

  return html`
    <div style="display: flex; gap: var(--aotw-space-s)">
      <button id="button-dialog" @click=${props.handleOpenDialog.bind(undefined, 'overlay-dialog')}>Open dialog</button>
      <button id="button-dropdown" @click=${props.handleOpenDropdown.bind(undefined, 'overlay-dropdown')}>Open dropdown</button>
      <button id="button-toast" @click=${props.handleOpenToast.bind(undefined, 'overlay-toast')}>Open toast</button>
    </div>

    <template id="overlay-dialog">
      <aotw-dialog>Click me!</aotw-dialog>
    </template>

    <template id="overlay-dropdown">
      <aotw-list-item>Item 1</aotw-list-item>
      <aotw-list-item>Item 2</aotw-list-item>
      <aotw-list-item>Item 3</aotw-list-item>
    </template>

    <template id="overlay-toast">
      <div>Toast placeholder</div>
    </template>
`;
};
