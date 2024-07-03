import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({})],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["test/setup.ts"],
    coverage: {
      all: true,
      include: ["src"],
      exclude: ["src/stories", "src/store"],
      provider: "istanbul",
      reporter: ["json", "lcov", "text", "clover", "html"],
    },
  },
});
