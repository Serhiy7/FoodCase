import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@regulamin": path.resolve(
        __dirname,
        "./src/components/RegulaminFeatures"
      ),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },

  server: {
    port: 3000,
    open: true, // Автооткрытие браузера
  },
  css: {
    modules: {
      localsConvention: "camelCase", // camelCase для CSS-модулей
    },
  },
});
