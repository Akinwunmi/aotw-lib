import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import '../../../shared/styles/overview.scss';
import './container.scss';

export default {
  title: 'Components/Container'
} as Meta;

const content = `What I have to do, I have to catch everybody if they start to go over the cliff \u2014 I mean if they're running and they don't look where they're going I have to come out from somewhere and catch them. That's all I do all day. I'd just be the catcher in the rye and all.`;

export const Overview = () => html`
  <h2>Container</h2>
  <div class="overview">
    <section>
      <header>Without scrollbar</header>
      <div class="variant">
        <header>Default</header>
        <div class="content">
          <aotw-container>Content</aotw-container>
        </div>
      </div>
      <div class="variant">
        <header>Elevated</header>
        <div class="content">
          <aotw-container elevated>Content</aotw-container>
        </div>
      </div>
    </section>
    <section>
      <header>With scrollbar</header>
      <div class="variant">
        <header>Default</header>
        <div class="content">
          <aotw-container scrollable>${content}</aotw-container>
        </div>
      </div>
      <div class="variant">
        <header>Elevated</header>
        <div class="content">
          <aotw-container elevated scrollable>${content}</aotw-container>
        </div>
      </div>
      <div class="variant">
        <header>Disabled</header>
        <div class="content">
          <aotw-container elevated scrollable disabled>${content}</aotw-container>
        </div>
      </div>
    </section>
  </div>
`;
