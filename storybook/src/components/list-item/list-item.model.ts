import '@aotw/components/src/list-item';
import { html, TemplateResult } from 'lit';

import { Story } from '../../../types/story.model';

interface ArgTypes {
  disabled: boolean;
  label: string;
  prefixContent?: TemplateResult | string;
  prefixType?: 'icon' | 'tag';
  suffixContent?: TemplateResult | string;
  suffixType?: 'icon' | 'tag';
}

export const listItemArgs: ArgTypes = {
  disabled: false,
  label: 'List Item'
};

export const ListItemTemplate: Story<ArgTypes> = (props) => {
  const prefix = props.prefixType === 'icon'
    ? html`<aotw-icon name=${props.prefixContent} size="medium" prefix></aotw-icon>`
    : html`<aotw-tag prefix>${props.prefixContent}</aotw-tag>`;

  const suffix = props.suffixType === 'icon'
    ? html`<aotw-icon name=${props.suffixContent} size="medium" suffix></aotw-icon>`
    : html`<aotw-tag suffix>${props.suffixContent}</aotw-tag>`;

  return html`
    <aotw-list-item id="0" ?disabled=${props.disabled}>
      ${props.prefixContent && props.prefixType && prefix || ''}
      ${props.label}
      ${props.suffixContent && props.suffixType && suffix || ''}
    </aotw-list-item>
  `;
};
