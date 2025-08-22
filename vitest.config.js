export default {
  test: {
    environment: 'jsdom',
    coverage: {
      exclude: [
        '**/usage.js',
        '**/dist/**',
        '**/vite.config.js',
        '**/vitest.config.js',
        '**/eslint.config.js',
      ],
    },
  },
};
