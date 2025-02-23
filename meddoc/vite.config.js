import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      buffer: 'buffer/',
      process: 'process/browser',
      util: 'util/',
      assert: 'assert/',
    },
  },
  define: {
    global: 'globalThis', // Ensures global is defined
    'process.env': process.env,    // Ensures process.env is defined
  },
  optimizeDeps: {
    include: ['crypto', 'stream', 'buffer', 'process', 'util', 'assert'],
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
});
