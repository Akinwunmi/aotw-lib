import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import '../../../shared/styles/overview.scss';

export default {
  title: 'Core/Input'
} as Meta;

export const Overview = () => html`
  <h2>Input</h2>
  <div class="overview">
    <section>
      <div class="variant">
        <header>Default</header>
        <div class="content">
          <input />
        </div>
      </div>
      <div class="variant">
        <header>Placeholder</header>
        <div class="content">
          <input placeholder="Type anything..." />
        </div>
      </div>
      <div class="variant">
        <header>Value</header>
        <div class="content">
          <input value="Something typed" />
        </div>
      </div>
      <div class="variant">
        <header>Disabled</header>
        <div class="content">
          <input value="Something typed" disabled />
        </div>
      </div>
    </section>
  </div>
`;
