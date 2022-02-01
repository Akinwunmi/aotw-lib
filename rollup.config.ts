import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: {
    'button': 'src/components/button/button.component.ts',
    'icon': 'src/components/icon/icon.component.ts',
    'scrim': 'src/components/scrim/scrim.component.ts'
  },
  output: {
    dir: 'dist/components',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    copy({
      targets: [
        {
          src: 'src/theme',
          dest: 'dist'
        }
      ]
    }),
    postcss(),
    resolve(),
    typescript()
  ],
  preserveEntrySignatures: 'strict'
};