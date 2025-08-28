import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'client'), // aqui diz onde está o index.html
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist'), // pasta final de build
    emptyOutDir: true, // limpa antes do build
  },
});
