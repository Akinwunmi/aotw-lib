import '@aotw/components/src/tab';
import { html, TemplateResult } from 'lit';

import { Story } from '../../../types/story.model';

export const tabStub = [
  { id: 1, title: 'Tab 1', disabled: false },
  { id: 2, title: 'Tab 2', disabled: false },
  { id: 3, title: 'Tab 3', disabled: false }
];

interface TabArgTypes {
  slot: TemplateResult | string;
}

export const tabArgs: TabArgTypes = {
  slot: html`
    ${tabStub.map(({ id, title, disabled }) => html`
      <aotw-tab id=${id} ?disabled=${disabled}>${title}</aotw-tab>
    `)}
  `
};

export const TabGroupTemplate: Story<TabArgTypes> = ({ slot }) => {
  return html`<aotw-tab-group>${slot}</aotw-tab-group>`;
};
