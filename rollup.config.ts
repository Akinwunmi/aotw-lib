import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: {
    'icon': 'src/components/icon/icon.component.ts'
  },
  plugins: [
    postcss({
      include: ['**/*.scss']
    }),
    typescript()
  ],
  output: {
    dir: 'dist',
    format: 'esm'
  },
  preserveEntrySignatures: 'strict'
};