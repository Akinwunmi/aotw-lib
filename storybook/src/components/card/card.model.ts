import '@aotw/components/src/card';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

interface ArgTypes {
  header?: boolean;
  content?: string;
  footer?: boolean;
  '[elevated]': boolean;
  '[header-image]'?: boolean;
  '[header-suffix]'?: boolean;
  '[header-prefix]'?: string;
  '[header-title]'?: string;
}

export const props: ArgTypes = {
  header: true,
  content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, facere?',
  footer: true,
  '[elevated]': true,
  '[header-image]': true,
  '[header-suffix]': true,
  '[header-prefix]': 'logo',
  '[header-title]': 'Header',
};

export const Template: Story<ArgTypes> = (props) => {
  const image = props['[header-image]'] && html`
    <img header-image src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Frisian_flag.svg" />
  `;

  const headerPrefix = props['[header-prefix]'] && html`
    <aotw-icon header-prefix name=${props['[header-prefix]']} size="medium"></aotw-icon>
  `;

  const headerSuffix = props['[header-suffix]'] && html`
    <button aotw-button header-suffix ghost>
      <aotw-icon name="close" size="medium"></aotw-icon>
    </button>
  `;

  const headerTitle = props['[header-title]'] && html`
    <span header-title>${props['[header-title]']}</span>
  `;

  const header = props.header && html`
    <aotw-card-header>
      ${image || ''}
      ${headerSuffix || ''}
      ${headerPrefix || ''}
      ${headerTitle || ''}
    </aotw-card-header>
  `;
  const content = props.content && html`
    <aotw-card-content>
      ${props.content}
    </aotw-card-content>
  `;
  const footer = props.footer && html`
    <aotw-card-footer>
      <button aotw-button ghost>Button</button>
      <button aotw-button>Button</button>
    </aotw-card-footer>
  `;

  return html`
    <aotw-card ?elevated=${props['[elevated]']}>
      ${header || ''}
      ${content || ''}
      ${footer || ''}
    </aotw-card>
  `;
};
