import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'client'),  // pasta onde está index.html
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist'), // pasta final para deploy
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src')
    }
  }
});
