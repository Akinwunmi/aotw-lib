import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import '../../../shared/styles/overview.scss';

export default {
  title: 'Core/Divider'
} as Meta;

export const Overview = () => html`
  <h2>Divider</h2>
  <div class="overview">
    <section>
      <div class="variant">
        <header>Default</header>
        <div class="content">
          <hr>
        </div>
      </div>
      <div class="variant">
        <header>Vertical</header>
        <div class="content" style="height: var(--aotw-size-l)">
          <hr vertical>
        </div>
      </div>
    </section>
  </div>
`;
