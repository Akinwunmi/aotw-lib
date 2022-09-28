import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#161616',
  colorSecondary: '#0000ff',

  // UI
  appBg: '#d4d7e2',
  appContentBg: '#d4d7e2',
  appBorderColor: '#a4a8b4',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#161616',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: '#d4d7e2',

  brandTitle: 'AOTW Design System',
  brandUrl: 'https://example.com',
  brandTarget: '_self',
});
