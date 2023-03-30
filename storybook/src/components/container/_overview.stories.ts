import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import '../../../shared/styles/overview.scss';
import './container.scss';

export default {
  title: 'Components/Container'
} as Meta;

export const Overview = () => html`
  <h2>Container</h2>
  <div class="overview">
    <section>
      <header>Without scrollbar</header>
      <div class="variant">
        <header>Default</header>
        <div class="content">
          <aotw-container></aotw-container>
        </div>
      </div>
      <div class="variant">
        <header>Elevated</header>
        <div class="content">
          <aotw-container elevated></aotw-container>
        </div>
      </div>
    </section>
    <section>
      <header>With scrollbar</header>
      <div class="variant">
        <header>Default</header>
        <div class="content">
          <aotw-container scrollable></aotw-container>
        </div>
      </div>
      <div class="variant">
        <header>Elevated</header>
        <div class="content">
          <aotw-container elevated scrollable>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium illo harum cum suscipit expedita obcaecati enim deleniti, vitae sit ratione. Sunt ratione porro ea dolore ab error iusto. Veritatis quam hic voluptate sapiente obcaecati ea provident. Quidem voluptas hic cupiditate vel nostrum, ipsam laboriosam eos doloribus fugiat, ipsa totam perspiciatis facilis corporis obcaecati nisi? A nemo architecto beatae repudiandae!
          </aotw-container>
        </div>
      </div>
      <div class="variant">
        <header>Disabled</header>
        <div class="content">
          <aotw-container elevated scrollable disabled></aotw-container>
        </div>
      </div>
    </section>
  </div>
`;
