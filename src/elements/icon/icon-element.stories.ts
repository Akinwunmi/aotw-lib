import { html } from 'lit';

import '../../../dist/elements/icon/icon-element.js';
import { Story } from '../../stories';

import './icon-element.stories.scss';
import { Icon } from './icon';

export default {
  title: 'Component/Icons',
  component: 'button-element'
};

interface ArgTypes {
  name: Icon;
}

const Template: Story<ArgTypes> = ({ name }: ArgTypes) => {
  return html`
    <aotw-icon class="story-icon" .name=${name}>
      Button
    </aotw-icon>
  `;
};

export const IconLogo = Template.bind({});
IconLogo.args = {
  name: Icon.LOGO
};
