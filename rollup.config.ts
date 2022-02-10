import copy from 'rollup-plugin-copy';
import litcss from 'rollup-plugin-postcss-lit';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: {
    'index': 'src/index.ts',
    'elements/button/button-element': 'src/elements/button/button-element.ts',
    'elements/icon/icon-element': 'src/elements/icon/icon-element.ts',
    'elements/scrim/scrim-element': 'src/elements/scrim/scrim-element.ts',
    'elements/toggle/toggle-element': 'src/elements/toggle/toggle-element.ts',
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