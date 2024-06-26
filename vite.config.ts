import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { Mode, plugin } from "vite-plugin-markdown";
import mdx from "@mdx-js/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/resume",
  plugins: [
    { enforce: "pre", ...mdx() },
    react(),
    tsconfigPaths(),
    plugin({
      mode: [Mode.MARKDOWN],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.yml"],
});
