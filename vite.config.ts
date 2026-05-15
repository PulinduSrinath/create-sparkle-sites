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
    // Use esbuild for fastest, best minification
    minify: "esbuild",
    // Target modern browsers so esbuild can output smaller code
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — always needed, cache separately
          "react-core": ["react", "react-dom"],
          // Router
          "react-router": ["react-router-dom"],
          // framer-motion — large animation library
          "motion": ["framer-motion"],
          // Lucide icons — large icon set, only shake at import level
          "icons": ["lucide-react"],
          // Sonner toast
          "sonner": ["sonner"],
          // EmailJS
          "emailjs": ["@emailjs/browser"],
          // Radix UI — only primitives actually used are bundled
          "radix-ui": [
            "@radix-ui/react-slot",
            "@radix-ui/react-toast",
            "@radix-ui/react-dialog",
            "@radix-ui/react-label",
            "@radix-ui/react-select",
            "@radix-ui/react-accordion",
            "@radix-ui/react-checkbox",
          ],
        },
      },
    },
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
