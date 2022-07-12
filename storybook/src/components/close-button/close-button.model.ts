import '@aotw/components/src/close-button';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

export const CloseButtonTemplate: Story<null> = () => {
  return html`
    <aotw-close-button></aotw-close-button>
  `;
};