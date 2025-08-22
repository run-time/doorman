import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'doorman.js',
      name: 'Doorman',
      fileName: (format) => `doorman.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
  },
});
