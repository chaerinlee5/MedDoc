import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Polyfill Node.js core modules
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      buffer: 'buffer/',
      process: 'process/browser',
      util: 'util/',
      assert: 'assert/',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis', // Ensures global context is available
      },
    },
    include: ['crypto', 'stream', 'buffer', 'process', 'util', 'assert'],
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
    commonjsOptions: {
      transformMixedEsModules: true, // Helps when using CJS & ESM mixed modules
    },
  },
  define: {
    'process.env': {}, // Prevents process.env undefined errors
  },
});
