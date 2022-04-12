import { defineConfig } from 'vite'
const litcss = require('rollup-plugin-postcss-lit');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  plugins: [
    litcss()
  ]
})
