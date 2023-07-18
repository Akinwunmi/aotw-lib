import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import '../../../shared/styles/overview.scss';

export default {
  title: 'Core/Table'
} as Meta;

export const Overview = () => html`
  <h2>Table</h2>
  <div class="overview">
    <section>
      <div class="variant">
        <header>Default</header>
        <div class="content">
          <table aotw-table>
            <caption>Caption</caption>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Row 1</th>
                <td>Cell 1.2</td>
                <td>Cell 1.3</td>
                <td>
                  <button aotw-button ghost>
                    <aotw-icon name="ellipsis"></aotw-icon>
                  </button>
                </td>
              </tr>
              <tr>
                <th>Row 2</th>
                <td>Cell 2.2</td>
                <td>Cell 2.3</td>
                <td>
                  <button aotw-button ghost>
                    <aotw-icon name="ellipsis"></aotw-icon>
                  </button>
                </td>
              </tr>
              <tr>
                <th>Row 3</th>
                <td>Cell 3.2</td>
                <td>Cell 3.3</td>
                <td>
                  <button aotw-button ghost>
                    <aotw-icon name="ellipsis"></aotw-icon>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
`;
