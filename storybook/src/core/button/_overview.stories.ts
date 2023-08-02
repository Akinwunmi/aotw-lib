import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import '../../../shared/styles/overview.scss';

export default {
  title: 'Core/Button'
} as Meta;

export const Overview = () => html`
  <h2>Button</h2>
  <div class="overview">
    <section>
      <header>Primary</header>
      <div class="variant">
        <header>Default</header>
        <div class="content">
          <button>Button</button>
          <button>
            <aotw-icon name="logo"></aotw-icon>
            Button
          </button>
          <button><aotw-icon name="logo"></aotw-icon></button>
        </div>
      </div>
      <div class="variant">
        <header>Ghost</header>
        <div class="content">
          <button ghost>Button</button>
          <button ghost>
            <aotw-icon name="logo"></aotw-icon>
            Button
          </button>
          <button ghost><aotw-icon name="logo"></aotw-icon></button>
        </div>
      </div>
    </section>
    <section>
      <header>Secondary</header>
      <div class="variant">
        <header>Default</header>
        <div class="content">
          <button secondary>Button</button>
          <button secondary>
            <aotw-icon name="logo"></aotw-icon>
            Button
          </button>
          <button secondary><aotw-icon name="logo"></aotw-icon></button>
        </div>
      </div>
      <div class="variant">
        <header>Ghost</header>
        <div class="content">
          <button ghost secondary>Button</button>
          <button ghost secondary>
            <aotw-icon name="logo"></aotw-icon>
            Button
          </button>
          <button ghost secondary><aotw-icon name="logo"></aotw-icon></button>
        </div>
      </div>
    </section>
    <section>
      <header>Disabled</header>
      <div class="variant">
        <header>Default</header>
        <div class="content">
          <button disabled>Button</button>
          <button disabled>
            <aotw-icon name="logo"></aotw-icon>
            Button
          </button>
          <button disabled><aotw-icon name="logo"></aotw-icon></button>
        </div>
      </div>
    </section>
  </div>
`;
