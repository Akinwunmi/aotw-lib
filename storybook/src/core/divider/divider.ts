import { html } from 'lit';

import { Story } from '../../../types/story.model';

interface DividerProps {
  vertical: boolean;
}

export const dividerArgs: DividerProps = {
  vertical: false
};

export const DividerTemplate: Story<DividerProps> = (props) => {
  return html`
    <div style="height: var(--aotw-size-l)">
      <hr aotw-divider ?vertical=${props.vertical}>
    </div>
  `;
};
