import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'client'), // aponta para a pasta onde está index.html
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist'), // diretório de saída final
    emptyOutDir: true, // limpa a pasta antes do build
  },
});
