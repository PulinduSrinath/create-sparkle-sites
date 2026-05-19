import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

/** Load the main stylesheet asynchronously so it does not block first paint. */
function asyncCssPlugin(): Plugin {
  return {
    name: "async-css",
    apply: "build",
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet"([^>]*?)href="(\/assets\/[^"]+\.css)"([^>]*?)>/g,
        '<link rel="preload" as="style" href="$2"$1$3 onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$2"></noscript>'
      );
    },
  };
}

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
    minify: "terser",
    target: "esnext",
    cssCodeSplit: true,
    cssMinify: true,
    modulePreload: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.warn", "console.info"],
        passes: 2,
        dead_code: true,
        unused: true,
      },
      mangle: { safari10: true },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("framer-motion")) return "motion";
          if (id.includes("react-dom") || id.includes("/react/")) return "react-core";
          if (id.includes("react-router")) return "react-router";
          if (id.includes("@radix-ui")) return "radix-ui";
          if (id.includes("lucide-react")) return "icons";
          if (id.includes("@tanstack/react-query")) return "query";
          if (id.includes("sonner")) return "sonner";
          if (id.includes("zod") || id.includes("@hookform") || id.includes("react-hook-form")) return "form-libs";
          if (id.includes("@emailjs")) return "emailjs";
          if (id.includes("react-google-recaptcha")) return "recaptcha";
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  plugins: [
    react(),
    asyncCssPlugin(),
    ViteImageOptimizer({
      webp: {
        quality: 62,
        effort: 6,
        alphaQuality: 80,
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
