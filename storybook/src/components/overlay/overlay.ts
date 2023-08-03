import '@aotw/components/src/card/index';
import '@aotw/components/src/list-item/index';
import '@aotw/components/src/overlay/index';
import { html } from 'lit';

import { Story } from '../../../types/story.model';
import { closeDialog, openDialog, openDropdown, openToast } from './overlay.utils';

interface OverlayProps {
  '--aotw-overlay-container-padding'?: string;
  openDialog: (elementId: string) => void;
  openDropdown: (elementId: string) => void;
  openToast: (elementId: string) => void;
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
      <aotw-overlay-trigger>
        <button>
          Open dialog
        </button>
        <aotw-card style="display: none">
          <aotw-card-header>
            <img header-image src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Frisian_flag.svg">
            <button header-suffix ghost @click=${closeDialog.bind(this)}>
              <aotw-icon name="close" size="medium"></aotw-icon>
            </button>
            Fryslân
          </aotw-card-header>
          <aotw-card-content>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, facere?
          </aotw-card-content>
          <aotw-card-footer>
            <button id="cancel-button" ghost @click=${closeDialog.bind(this)}>
              Cancel
            </button>
            <button @click=${closeDialog.bind(this)}>
              Confirm
            </button>
          </aotw-card-footer>
        </aotw-card>
      </aotw-overlay-trigger>
      <button id="button-dropdown" @click=${props.openDropdown.bind(undefined, 'overlay-dropdown')}>
        Open dropdown
      </button>
      <button id="button-toast" @click=${props.openToast.bind(undefined, 'overlay-toast')}>
        Open toast
      </button>
    </div>

    <div id="overlay-dropdown" style="display: none">
      <aotw-list-item>Item 1</aotw-list-item>
      <aotw-list-item>Item 2</aotw-list-item>
      <aotw-list-item>Item 3</aotw-list-item>
    </div>

    <div id="overlay-toast" style="display: none">
      Toast placeholder
    </div>
`;
};
