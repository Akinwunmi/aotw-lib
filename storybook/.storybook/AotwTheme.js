import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#111111',
  colorSecondary: '#0000ff',

  // UI
  appBg: '#dcdee4',
  appContentBg: '#dcdee4',
  appBorderColor: '#bcbec6',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#111111',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#111111',
  barSelectedColor: '#0000ff',
  barBg: '#dcdee4',

  brandTitle: 'AOTW Design System',
  brandUrl: 'https://github.com/Akinwunmi',
  brandImage: 'shared/assets/aotw-storybook-brand-image.png',
  brandTarget: '_self',
});
