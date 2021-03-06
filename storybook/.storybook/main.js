module.exports = {
  stories: [
    '../src/**/*.stories.@(mdx|ts)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: '@storybook/web-components',
  core: {
    builder: '@storybook/builder-vite'
  }
}