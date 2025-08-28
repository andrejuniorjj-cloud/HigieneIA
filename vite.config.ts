import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client", // Define a pasta client como raiz
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "dist"), // Saída final da build dentro da raiz do projeto
    emptyOutDir: true, // Limpa a pasta dist antes da build
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"), // Permite usar @/ para importar da src
    },
  },
});
