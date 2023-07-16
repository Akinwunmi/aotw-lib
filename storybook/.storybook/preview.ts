import { Preview } from '@storybook/web-components';

import './preview.scss';
import aotwTheme from './AotwTheme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: 'lightgrey',
      values: [
        {
          name: 'lightgrey',
          value: '#dcdee4'
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: aotwTheme
    },
    options: {
      storySort: {
        order: ['Core', 'Components']
      }
    }
  }
}

export default preview;
