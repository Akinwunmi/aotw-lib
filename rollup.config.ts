import litcss from 'rollup-plugin-lit-css';
import Sass from 'sass';
import summary from 'rollup-plugin-summary';
import typescript from '@rollup/plugin-typescript';

export default {
  input: {
    'icon': 'src/components/icon/icon.component.ts'
  },
  plugins: [
    litcss({
      include: ['**/*.scss'],
      transform: (_, { filePath }) =>
        Sass.compile(filePath).css.toString()
    }),
    summary({ }),
    typescript()
  ],
  output: {
    dir: 'dist',
    format: 'esm'
  },
  preserveEntrySignatures: 'strict'
};