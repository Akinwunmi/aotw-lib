import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import '../../../shared/styles/overview.scss';

export default {
  title: 'Core/Tag'
} as Meta;

export const Overview = () => html`
  <h2>Tag</h2>
  <div class="overview">
    <section>
      <div class="variant">
        <header>Default</header>
        <div class="content">
          <div aotw-tag>Tag</div>
        </div>
      </div>
      <div class="variant">
        <header>With prefix</header>
        <div class="content">
          <div aotw-tag>
            <aotw-icon name="shine"></aotw-icon>
            Tag
          </div>
        </div>
      </div>
      <div class="variant">
        <header>With suffix</header>
        <div class="content">
          <div aotw-tag>
            Tag
            <aotw-icon name="close"></aotw-icon>
          </div>
        </div>
      </div>
      <div class="variant">
        <header>Without label</header>
        <div class="content">
          <div aotw-tag>
            <aotw-icon name="shine"></aotw-icon>
            <aotw-icon name="close"></aotw-icon>
          </div>
        </div>
      </div>
      <div class="variant">
        <header>Icon only</header>
        <div class="content">
          <div aotw-tag>
            <aotw-icon name="shine"></aotw-icon>
          </div>
        </div>
      </div>
    </section>
  </div>
`;
