import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import '../../../shared/styles/overview.scss';

export default {
  title: 'Core/Toggle Switch'
} as Meta;

export const Overview = () => html`
  <h2>Toggle Switch</h2>
  <div class="overview">
    <section>
      <div class="variant">
        <header>Off</header>
        <div class="content">
          <input type="checkbox" toggle-switch />
          <label>Show all</label>
        </div>
      </div>
      <div class="variant">
        <header>On</header>
        <div class="content">
          <input type="checkbox" checked toggle-switch />
          <label>Show all</label>
        </div>
      </div>
      <div class="variant">
        <header>Disabled</header>
        <div class="content">
          <input type="checkbox" disabled toggle-switch />
          <label>Show all</label>
        </div>
      </div>
    </section>
  </div>
`;
