import copy from 'rollup-plugin-copy';
import litcss from 'rollup-plugin-postcss-lit';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: {
    'index': 'src/index.ts',
    'elements/button/button-element': 'src/elements/button/button-element.ts',
    'elements/close-button/close-button-element': 'src/elements/close-button/close-button-element.ts',
    'elements/dialog/dialog-element': 'src/elements/dialog/dialog-element.ts',
    'elements/icon/icon-element': 'src/elements/icon/icon-element.ts',
    'elements/toggle-button/toggle-button-element': 'src/elements/toggle-button/toggle-button-element.ts',
    'elements/toggle-switch/toggle-switch-element': 'src/elements/toggle-switch/toggle-switch-element.ts'
  },
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve({
      browser: true
    }),
    copy({
      targets: [
        {
          src: 'src/theme',
          dest: 'dist',
        }
      ]
    }),
    typescript(),
    postcss({
      minimize: false,
      inject: false
    }),
    litcss(),
  ],
  preserveEntrySignatures: 'strict',
};