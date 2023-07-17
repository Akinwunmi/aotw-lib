import { AotwIconRegistry } from '@aotw/components/src/icon/icon-registry';
import '@aotw/components/src/icon/icon';
import icons from '@aotw/core/dist/icons/icons.json';
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

AotwIconRegistry.register(icons);

export default preview;
