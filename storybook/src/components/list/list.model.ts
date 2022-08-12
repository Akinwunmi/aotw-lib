import '@aotw/components/src/list';
import { html, TemplateResult } from 'lit';

import { Story } from '../../../types/story.model';

export const listItemStub = [
  { id: 1, label: 'List Item 1', disabled: false },
  { id: 2, label: 'List Item 2', disabled: false },
  { id: 3, label: 'List Item 3', disabled: false }
];

interface ListArgTypes {
  disabled: boolean;
  slot: TemplateResult | string;
}

export const listArgs: ListArgTypes = {
  disabled: false,
  slot: html`
    ${listItemStub.map(item => html`
      <aotw-list-item id=${item.id} ?disabled=${item.disabled}>${item.label}</aotw-list-item>
    `)}
  `
};

export const ListTemplate: Story<ListArgTypes> = ({ disabled, slot }) => {
  return html`<aotw-list ?disabled=${disabled}>${slot}</aotw-list>`;
};
