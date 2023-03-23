import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import '../../../shared/styles/overview.scss';
import './colors.scss';

export default {
  title: 'Core'
} as Meta;

export const Colors = () => html`
  <h2>Palette</h2>
  <div class="overview colors">
    <section>
      <header>Default</header>
      <div class="variant no-header">
        <div class="content">
          <div class="card light" style="background-color: var(--aotw-color-white)">
            <p>White</p>
            <p class="value">0 0 100</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-black)">
            <p>Black</p>
            <p class="value">0 0 7</p>
          </div>
        </div>        
      </div>
      <header class="second">Feedback</header>
      <div class="variant no-header">
        <div class="content">
          <div class="card" style="background-color: var(--aotw-color-success-500)">
            <p>Success 500</p>
            <p class="value">150 70 51</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-warning-500)">
            <p>Warning 500</p>
            <p class="value">39 100 51</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-error-500)">
            <p>Error 500</p>
            <p class="value">354 100 51</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <header>Primary</header>
      <div class="variant no-header">
        <div class="content">
          <div class="card light" style="background-color: var(--aotw-color-primary-100)">
            <p>Primary 100</p>
            <p class="value">240 100 97</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-primary-200)">
            <p>Primary 200</p>
            <p class="value">240 100 88</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-primary-300)">
            <p>Primary 300</p>
            <p class="value">240 100 80</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-primary-400)">
            <p>Primary 400</p>
            <p class="value">240 100 67</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-primary-500)">
            <p>Primary 500</p>
            <p class="value">240 100 51</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-primary-600)">
            <p>Primary 600</p>
            <p class="value">240 100 37</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-primary-700)">
            <p>Primary 700</p>
            <p class="value">240 100 23</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <header>Secondary</header>
      <div class="variant no-header">
        <div class="content">
          <div class="card light" style="background-color: var(--aotw-color-secondary-100)">
            <p>Secondary 100</p>
            <p class="value">165 100 97</p>
          </div>
          <div class="card light" style="background-color: var(--aotw-color-secondary-200)">
            <p>Secondary 200</p>
            <p class="value">165 100 88</p>
          </div>
          <div class="card light" style="background-color: var(--aotw-color-secondary-300)">
            <p>Secondary 300</p>
            <p class="value">165 100 80</p>
          </div>
          <div class="card light" style="background-color: var(--aotw-color-secondary-400)">
            <p>Secondary 400</p>
            <p class="value">165 100 67</p>
          </div>
          <div class="card light" style="background-color: var(--aotw-color-secondary-500)">
            <p>Secondary 500</p>
            <p class="value">165 100 51</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-secondary-600)">
            <p>Secondary 600</p>
            <p class="value">165 100 37</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-secondary-700)">
            <p>Secondary 700</p>
            <p class="value">165 100 23</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <header>Grey</header>
      <div class="variant no-header">
        <div class="content">
          <div class="card light" style="background-color: var(--aotw-color-grey-100)">
            <p>Grey 100</p>
            <p class="value">235 10 97</p>
          </div>
          <div class="card border light" style="background-color: var(--aotw-color-grey-200)">
            <p>Grey 200</p>
            <p class="value">235 10 88</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-grey-300)">
            <p>Grey 300</p>
            <p class="value">235 10 80</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-grey-400)">
            <p>Grey 400</p>
            <p class="value">235 10 67</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-grey-500)">
            <p>Grey 500</p>
            <p class="value">235 10 51</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-grey-600)">
            <p>Grey 600</p>
            <p class="value">235 10 37</p>
          </div>
          <div class="card" style="background-color: var(--aotw-color-grey-700)">
            <p>Grey 700</p>
            <p class="value">235 10 23</p>
          </div>
        </div>
      </div>
    </section>
  </div>
`;
