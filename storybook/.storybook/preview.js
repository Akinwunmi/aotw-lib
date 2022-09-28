import '@aotw/core/dist/variables.css';

import aotwTheme from './AotwTheme';

export const parameters = {
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
