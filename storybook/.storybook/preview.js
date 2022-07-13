import '@aotw/core/dist/variables.css';

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
  }
}