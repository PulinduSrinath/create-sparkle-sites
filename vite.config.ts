import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    // Use terser for best minification to satisfy Lighthouse
    minify: "terser",
    // Target modern browsers so output is smaller
    target: "esnext",
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      webp: {
        // Re-compress webp assets at build time
        quality: 75,
        effort: 6,
      },
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
