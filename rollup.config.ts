import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: {
    'icon': 'src/components/icon/icon.component.ts'
  },
  output: {
    dir: 'dist/components',
    format: 'esm',
    sourceMap: true
  },
  plugins: [
    postcss({
      extensions: ['.scss'],
      extract: false,
      modules: true,
      use: ['sass']
    }),
    resolve(),
    typescript()
  ],
  preserveEntrySignatures: 'strict'
};