import { defineConfig } from 'vite';
import { glob } from 'glob';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => ({
  define: {
    [command === 'serve' ? 'global' : '_global']: {},
  },
  root: 'src',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [FullReload(['./src/**/*.html']), SortCss({ sort: 'mobile-first' })],
}));
