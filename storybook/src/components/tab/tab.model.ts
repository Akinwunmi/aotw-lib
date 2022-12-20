import '@aotw/components/src/tab';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

interface ArgTypes {
  disabledItem: number;
  items: number;
}

export const tabArgs: ArgTypes = {
  disabledItem: 3,
  items: 3
};

export const TabGroupTemplate: Story<ArgTypes> = (props) => {
  const tabs = new Array(props.items).fill(true).map((_, index) => ({
    id: index + 1,
    label: `Tab ${index + 1}`,
    disabled: index === props.disabledItem
  }));
  
  const tabElements = tabs.map(tab => html`
    <aotw-tab id=${tab.id} ?disabled=${tab.disabled}>${tab.label}</aotw-tab>
  `);

  return html`
    <aotw-tab-group>
      ${tabElements}
    </aotw-tab-group>
  `;
};
