import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@components': path.resolve(__dirname, './components'),
      '@pages': path.resolve(__dirname, './pages'),
      '@contexts': path.resolve(__dirname, './contexts'),
      '@data': path.resolve(__dirname, './data'),
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
  }
});
