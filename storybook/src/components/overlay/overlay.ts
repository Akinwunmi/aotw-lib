import '@aotw/components/src/overlay/index';
import { OverlayConfig } from '@aotw/components/src/overlay/overlay.model';
import { html } from 'lit';

import { Story } from '../../../types/story.model';
import { openDialog, openDropdown, openToast } from './overlay.utils';

interface OverlayProps {
  '--aotw-overlay-container-padding'?: string;
  openDialog: (elementId: string, config?: OverlayConfig) => void;
  openDropdown: (elementId: string, config?: OverlayConfig) => void;
  openToast: (elementId: string, config?: OverlayConfig) => void;
}

export const overlayArgs: OverlayProps = {
  '--aotw-overlay-container-padding': 'var(--aotw-space-xl)',
  openDialog,
  openDropdown,
  openToast
};

export const OverlayTemplate: Story<OverlayProps> = (props) => {
  if (props['--aotw-overlay-container-padding']) {
    document.documentElement.style.setProperty('--aotw-overlay-container-padding', props['--aotw-overlay-container-padding']);
  }

  return html`
    <div style="display: flex; gap: var(--aotw-space-s)">
      <button id="button-dialog" @click=${props.openDialog.bind(undefined, 'overlay-dialog')}>Open dialog</button>
      <button id="button-dropdown" @click=${props.openDropdown.bind(undefined, 'overlay-dropdown')}>Open dropdown</button>
      <button id="button-toast" @click=${props.openToast.bind(undefined, 'overlay-toast')}>Open toast</button>
    </div>

    <template id="overlay-dialog">
      <aotw-card>
        <aotw-card-header>
          Dialog
          <button header-suffix ghost>
            <aotw-icon name="close" size="medium"></aotw-icon>
          </button>
        </aotw-card-header>
        <aotw-card-content>This is a card component used for displaying a dialog</aotw-card-content>
        <aotw-card-footer>
          <button ghost class="cancel">Cancel</button>
          <button class="confirm">Confirm</button>
        </aotw-card-footer>
      </aotw-card>
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
