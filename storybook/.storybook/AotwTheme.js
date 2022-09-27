import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#161616',
  colorSecondary: '#3300ff',

  // UI
  appBg: '#d4d7e2',
  appContentBg: '#d4d7e2',
  appBorderColor: '#a4a8b4',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", "Poppins", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#161616',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#838290',
  barSelectedColor: '#3300ff',
  barBg: '#d4d7e2',

  brandTitle: 'AOTW Design System',
  brandUrl: 'https://github.com/Akinwunmi',
  brandTarget: '_self',
});
