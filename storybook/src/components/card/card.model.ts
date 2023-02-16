import '@aotw/components/src/card';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

interface ArgTypes {
  header?: boolean;
  content?: boolean;
  footer?: boolean;
  '[header-image]'?: boolean;
  '[header-suffix]'?: boolean;
  '[header-prefix]'?: string;
  '[header-title]'?: string;
}

export const props: ArgTypes = {
  header: true,
  content: true,
  footer: true,
  '[header-image]': true,
  '[header-suffix]': true,
  '[header-prefix]': 'logo',
  '[header-title]': 'Header',
};

export const Template: Story<ArgTypes> = (props) => {
  const image = props['[header-image]'] && html`
    <img header-image src="https://unsplash.it/600/400" />
  `;

  const headerPrefix = props['[header-prefix]'] && html`
    <aotw-icon header-prefix name=${props['[header-prefix]']} size="medium"></aotw-icon>
  `;

  const headerSuffix = props['[header-suffix]'] && html`
    <button header-suffix ghost>
      <aotw-icon name="close" size="medium"></aotw-icon>
    </button>
  `;

  const header = props.header && html`
    <aotw-card-header>
      ${image || ''}
      ${headerSuffix || ''}
      ${headerPrefix || ''}
      <span header-title>${props['[header-title]']}</span>
    </aotw-card-header>
  `;
  const content = props.content && html`
    <aotw-card-content>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, facere?
    </aotw-card-content>
  `;
  const footer = props.footer && html`
    <aotw-card-footer>
      <button ghost>Button</button>
      <button>Button</button>
    </aotw-card-footer>
  `;

  return html`
    <aotw-card>
      ${header || ''}
      ${content || ''}
      ${footer || ''}
    </aotw-card>
  `;
};
