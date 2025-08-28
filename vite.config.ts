import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "client", // define a pasta client como raiz
  plugins: [react()],
  build: {
    outDir: "../dist", // saída final da build
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": "/src", // permite usar @/ para importar da src
    },
  },
});
