import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'dist/doorman.es.js',
          dest: '../public',
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: 'doorman.js',
      name: 'Doorman',
      fileName: (format) => `doorman.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
  },
});
