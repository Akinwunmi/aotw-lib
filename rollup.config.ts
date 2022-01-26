import litcss from 'rollup-plugin-lit-css';
import Sass from 'sass';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    litcss({
      include: ['**/*.scss'],
      transform: (_, { filePath }) =>
        Sass.compile(filePath).css.toString()
    }),
    typescript()
  ]
};