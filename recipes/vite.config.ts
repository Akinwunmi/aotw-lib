import { defineConfig } from 'vite'
const litcss = require('rollup-plugin-postcss-lit');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: () => 'index.js',
      name: 'index'
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  plugins: [
    litcss()
  ]
})
