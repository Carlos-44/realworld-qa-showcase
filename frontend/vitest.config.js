import { defineConfig } from 'vitest/config';

export default defineConfig({
  // The app keeps JSX in .js files, so esbuild has to treat them as JSX
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    reporters: ['verbose', 'junit'],
    outputFile: { junit: '../test-results/unit-results.xml' },
  },
});
